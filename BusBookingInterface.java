public interface BusBookingInterface {
    void bookTicket(int busID, String destination, String travelDate);
    void cancelBooking(int bookingID);
    void makePayment(double amount, String paymentMethod);
    void viewBookingHistory();
}
