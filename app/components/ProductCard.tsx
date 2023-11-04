import AddToCard from '@/app/components/AddToCard';
import styles from './ProductCard.module.css'

export default function ProductCard() {
  return (
    <div>
      {/* the css modules are used when we do not want different css files*/}
      {/* to override eachOther, we provide each module for each component*/}
      {/*<div className={styles.card}>*/}

      {/* rendering the button in another component because we need interactivity and for that we need to */}
      {/* use the client side, for better performance I took the button and created a client component */}
      <AddToCard/>
    </div>
  )
}