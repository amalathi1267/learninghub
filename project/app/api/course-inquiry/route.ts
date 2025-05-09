import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    // Here you would typically save the data to your database
    // For example, using Prisma:
    // const inquiry = await prisma.courseInquiry.create({
    //   data: {
    //     fullName: formData.fullName,
    //     email: formData.email,
    //     phone: formData.phone,
    //     course: formData.course,
    //     message: formData.message,
    //     createdAt: new Date(),
    //   },
    // });

    // For now, we'll just log the data and return a success response
    console.log('Received form submission:', formData);

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully',
      data: formData 
    });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to process form submission' 
      },
      { status: 500 }
    );
  }
} 