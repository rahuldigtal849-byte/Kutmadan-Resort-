import { BookingFormData } from '../types';
import { RESORT_INFO } from '../data/resortData';

export function createWhatsAppBookingUrl(booking: Partial<BookingFormData>): string {
  const guestName = booking.guestName?.trim() || 'Guest';
  const roomCategory = booking.roomCategory || 'Any Available Category';
  const checkIn = booking.checkInDate || 'To be specified';
  const checkOut = booking.checkOutDate || 'To be specified';
  const adults = booking.adults ?? 2;
  const children = booking.children ?? 0;
  const roomsCount = booking.roomsCount ?? 1;
  const mobileNumber = booking.mobileNumber?.trim() || 'Provided on chat';

  const message = [
    `Hello Kutmadan Resort Cherrapunji,`,
    `I would like to enquire about a room reservation.`,
    ``,
    `Guest Name: ${guestName}`,
    `Selected Room Category: ${roomCategory}`,
    `Check-in Date: ${checkIn}`,
    `Check-out Date: ${checkOut}`,
    `Number of Adults: ${adults}`,
    `Number of Children: ${children}`,
    `Number of Rooms: ${roomsCount}`,
    `Mobile Number: ${mobileNumber}`,
    ``,
    `Please share the latest room availability, tariff and booking confirmation procedure.`,
    `Thank you.`
  ].join('\n');

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${RESORT_INFO.officialWhatsAppNumber.replace('+', '')}?text=${encodedMessage}`;
}

export function createQuickRoomWhatsAppUrl(roomName: string): string {
  return createWhatsAppBookingUrl({
    roomCategory: roomName
  });
}
