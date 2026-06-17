import jakarta.persistence.*;// this page is for converting the reviews table into java format (Table Mapping)

@Entity// tells Spring boot that this is a database table
@Table(name = "reviews")// links backend to the reviews table
public class Review {

    @Id // the id number is the primary key in the table
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id; // long is not needed here as the resteraunt only needs a few reviews for the site

    private String reviewText;//encapsulation is used here private variables
    private int rating;

    public Review() {//allows for empty constructor

    }

    public Review(String reviewText, int rating) {
        this.reviewText = reviewText;
        this.rating = rating;
    }

    public int getId() {//getter and setter method is made for each variable except for id
        return id;
    }

    public String getReviewText() {
        return reviewText;
    }

    public void setReviewText(String reviewText) {
        this.reviewText = reviewText;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}