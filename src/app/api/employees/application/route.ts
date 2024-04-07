import Employee from "@/models/application";
import { dbConnect } from "@/config/db";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

dbConnect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;
        const employee = await Employee.findOne({email});
        if(employee){
            return NextResponse.json({error: 'Employee already exists'}, {status: 400});
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        const newEmployee = new Employee({ email, password: hashedPassword });
        const savedEmployee = await newEmployee.save();

        return NextResponse.json({message: 'Employee created successfully'}, {status: 201});

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}