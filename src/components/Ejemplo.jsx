// Componente.jsx
import Layout from './page';
import PropTypes from 'prop-types';
const Componente = ({ Datas }) => {
  const DynamicComponent = Datas; // Asegúrate de que Datas sea un componente válido
  return (
    <Layout>
      <DynamicComponent />
    </Layout>
  );
};
Componente.propTypes = {
  Datas: PropTypes.elementType.isRequired,
};
export default Componente;
