import PropTypes from 'prop-types';
import dataStat from '../../data.json'
import {StatItem} from './Statitem'
import css from './Statistics.module.css'
export function Statistics({title}){
return(
<section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>

  <ul className={css.statList}>
        { dataStat.map(({id,label,percentage})=>{
           return <StatItem key={id} label={label}  
           percentage={percentage} />
        }) }
  </ul>
</section>
)
}

Statistics.propTypes = {
   title: PropTypes.string,
    
  };