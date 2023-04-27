import { CustomButtonProps } from 'src/interfaces/button';
import '../../styles.module.scss';
import { CustomBadgeWrapper } from './styles';

const CustomBadge: React.FC<CustomButtonProps> = props => {
  return <CustomBadgeWrapper {...props} shape="round" />;
};

export default CustomBadge;
