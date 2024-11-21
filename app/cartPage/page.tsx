'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { Typography, List, Container, Button } from '@mui/material';
import EmptyCart from '../EmptyCartPage/page';
import { removeFromCart, removeOneFromCart } from '../store/cartSlice'; 
import { enrollCourse } from '../store/enrolledSlice';
import { languages } from '../languages';
import toast from 'react-hot-toast';
import ResponsiveAppBar from '../components/navBar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

interface CartItem {
  id: number;
  title: string;
  imgSrc: string;
  price: string;
  quantity: number;
}

const CartPage = () => {
  const [isClient, setIsClient] = useState(false);

  // Initialize the client-side flag on mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Redux states
  const cartItems = useSelector((state: RootState) => state.cart.items) || [];
  const dispatch = useDispatch();

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleRemoveOne = (id: number) => {
    dispatch(removeOneFromCart(id));
  };

  const handleEnrollCourse = (item: CartItem) => {
    // Enroll course after validating the course data
    const course = { id: item.id, imgSrc: item.imgSrc, price: item.price, title: item.title };

    if (course.id && course.imgSrc && course.price && course.title) {
      dispatch(enrollCourse(course)); // Dispatch enrollment action
      toast.success("Course enrolled! 🎓");
    } else {
      console.error("Invalid course data:", course);
      alert("Failed to enroll course, please check course details.");
    }
  };

  // Get current language for translations
  const language = useSelector((state: RootState) => state.language.language);
  const t = languages[language] || languages.en;

  // Return early with a loading state until client-side rendering is available
  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ResponsiveAppBar />
      <div style={{ padding: '20px', border: '1px solid black' }}>
        <Typography
          variant="h4"
          style={{
            textAlign: 'center',
            fontWeight: '900',
            padding: '20px 0px',
            color: '#673ab7',
          }}
        >
          {t.cart}
        </Typography>
        <Container>
          <List>
            {cartItems.length === 0 ? (
              <EmptyCart title={t.ShoppingCart} coursesCount={t.coursesinCart} />
            ) : (
              cartItems.map((item: CartItem) => (
                <div
                  key={item.id}
                  style={{
                    border: '1px solid #bdbdbd',
                    marginBottom: '15px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      margin: '10px 0',
                    }}
                  >
                    <div>
                      <img
                        src={item.imgSrc}
                        alt="course"
                        style={{ width: 200, marginRight: 100 }}
                      />
                    </div>
                    <div>
                      <Typography variant="h6" style={{ color: '#673ab7' }}>
                        {item.title}
                      </Typography>
                      <Typography>Course Price: ${item.price}</Typography>
                      <Typography>Quantity: {item.quantity}</Typography>
                      <Typography style={{ color: 'gray' }}>
                        Udemy Site Wishing useful content for you
                      </Typography>
                      <div className="flex gap-3">
                        <Button
                          style={{
                            width: '100%',
                            height: '50%',
                            margin: '20px 0px',
                            backgroundColor: '#673ab7',
                            color: 'white',
                          }}
                          onClick={() => handleRemoveOne(item.id)}
                        >
                          Remove One
                        </Button>
                        <Button
                          style={{
                            width: '100%',
                            height: '50%',
                            margin: '20px 0px',
                            backgroundColor: '#e53935',
                            color: 'white',
                          }}
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          Remove
                        </Button>
                        <Button
                          style={{
                            width: '100%',
                            height: '50%',
                            backgroundColor: '#4caf50',
                            color: 'white',
                            margin: '20px 0px',
                          }}
                          onClick={() => handleEnrollCourse(item)}
                        >
                          Enroll Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </List>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
