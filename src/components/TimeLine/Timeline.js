import '../../screens/ReleaseNotesScreen.css';
import TimelineItem from './TimelineItem';

const Timeline = () => {
  return (
    <div className="timeline">
      <TimelineItem
        version="Versión 2.0"
        date="En desarrollo"
        description={[
          'Se está desarrollando la versión 2.0 del sistema de compra, venta e inventario para la empresa de Productos Veterinarios Mimados.',
          'En esta versión, se realizarán cambios significativos en la arquitectura y tecnologías utilizadas con el objetivo de mejorar la experiencia de usuario, velocidad y rendimiento del software.',
          [
            {
              title: 'Arquitectura basada en micro-servicios:',
              items: [
                'Se migró de una arquitectura monolítica a una arquitectura basada en micro-servicios.',
                'Los diferentes componentes del sistema se dividieron en servicios independientes que se comunican entre sí mediante interfaces bien definidas.',
                'Esta nueva arquitectura permite una mayor flexibilidad, escalabilidad y facilidad de mantenimiento, ya que cada servicio se puede desarrollar, desplegar y escalar de forma independiente.',
              ],
            },
            {
              title: 'Base de datos migrada a MongoDB:',
              items: [
                'Se realizó la migración de la base de datos desde SQL Server a MongoDB, una base de datos NoSQL orientada a documentos',
                'MongoDB ofrece una mayor flexibilidad y escalabilidad, lo que permite un manejo eficiente de grandes volúmenes de datos y una adaptación más sencilla a los cambios en los requisitos del sistema.',
                'La estructura flexible de documentos de MongoDB se adapta mejor a la naturaleza variable de los datos de inventario y productos.',
              ],
            },
            {
              title:
                'Cambio en las tecnologías utilizadas en el frontend y backend:',
              items: [
                'En el frontend, se reemplazó el antiguo sistema desarrollado con ASP.NET por una aplicación en React.',
                'React ofrece una mejor experiencia de usuario, rendimiento y mantenibilidad gracias a su enfoque basado en componentes re-utilizables.',
                'En el backend, se adoptó Express, un marco de aplicaciones web para Node.js, para construir una API robusta y escalable que se comunica con los micro-servicios.',
                'La combinación de React y Express permite una separación más clara entre el frontend y el backend, lo que facilita el desarrollo y el mantenimiento del sistema.',
              ],
            },
            {
              title: 'Módulo de comercio electrónico:',
              items: [
                'Se agregó un módulo de comercio electrónico que permite a los clientes realizar compras en línea a través de una plataforma integrada.',
                'Los usuarios podrán navegar por el catálogo de productos, agregar productos al carrito de compras, realizar pagos y gestionar sus órdenes desde el sistema.',
                'Este módulo amplía la funcionalidad del sistema, ofreciendo una nueva vía de venta y ampliando el alcance del negocio de Productos Veterinarios Mimados.',
              ],
            },
            {
              title: 'Gestión de pedidos:',
              items: [
                'Se incorporó un sistema de gestión de pedidos que permite a los empleados administrar y dar seguimiento a las órdenes recibidas a través del comercio electrónico y las ventas en sucursal.',
                'Los empleados podrán gestionar el estado de las órdenes, coordinar el envío de los productos y generar la documentación necesaria.',
              ],
            },
            {
              title: 'Beneficios del cambio en la arquitectura y tecnologías',
              items: [
                'Mejora en la experiencia de usuario (UX/UI): La adopción de React en el frontend proporciona una interfaz más interactiva y receptiva, lo que resulta en una mejor experiencia de usuario y una navegación más fluida.',
                'Mayor velocidad y rendimiento: La arquitectura basada en micro-servicios permite una distribución eficiente de la carga de trabajo y una mayor escalabilidad horizontal, lo que resulta en un sistema más rápido y con mejor rendimiento en situaciones de alta demanda.',
                'En el backend, se adoptó Express, un marco de aplicaciones web para Node.js, para construir una API robusta y escalable que se comunica con los micro-servicios.',
                'La combinación de React y Express permite una separación más clara entre el frontend y el backend, lo que facilita el desarrollo y el mantenimiento del sistema.',
                'Flexibilidad y adaptabilidad: Tanto la arquitectura basada en micro-servicios como el uso de MongoDB permiten una mayor flexibilidad para adaptarse a los cambios en los requisitos del sistema y a futuras expansiones o integraciones con otros servicios.',
                'Mantenibilidad y evolución: La separación en servicios independientes y el uso de tecnologías modernas y ampliamente adoptadas facilitan el mantenimiento y la evolución del sistema a largo plazo, lo que permite agregar nuevas funcionalidades y solucionar problemas de manera más eficiente.',
                'Escalabilidad: La arquitectura basada en micro-servicios y la capacidad de escalar cada servicio de forma independiente permiten un crecimiento escalable del sistema, adaptándose a las necesidades cambiantes de la empresa y sus sucursales.',
              ],
            },
          ],
          'Estos cambios y mejoras en la versión 2.0 del sistema de compra, venta e inventario, incluyendo el módulo de comercio electrónico y gestión de pedidos, buscan proporcionar una experiencia de usuario mejorada, mayor velocidad, rendimiento, escalabilidad y una ampliación de las capacidades del sistema para satisfacer las necesidades actuales y futuras de la empresa de Productos Veterinarios Mimados.',
        ]}
        position="left"
      />
      <TimelineItem
        version="Versión 1.9"
        date="24 de octubre de 2022"
        description={[
          'Se convirtió el sistema en multi-sucursal, lo que permitió gestionar los empleados de cada sucursal de la empresa.',
          'Se agregaron funciones para administrar el personal de diferentes sucursales de manera centralizada.',
          'Se optimizó el rendimiento del software y se realizaron correcciones de errores adicionales.',
        ]}
        position="right"
      />
      <TimelineItem
        version="Versión 1.7"
        date="01 de octubre de 2022"
        description={[
          'Se incorporó la capacidad de registrar clientes en el sistema.',
          'Los datos de los clientes podían ser almacenados y utilizados para fines de facturación y gestión de ventas.',
          'Se mejoraron las funcionalidades relacionadas con la generación de facturas y recibos.',
        ]}
        position="left"
      />
      <TimelineItem
        version="Versión 1.5"
        date="15 de septiembre de 2022"
        description={[
          'Se implementó una sección para los usuarios del sistema.',
          'Ahora es posible crear y gestionar cuentas de usuario con diferentes niveles de acceso.',
          'Los usuarios pueden realizar acciones específicas según sus permisos asignados.',
        ]}
        position="right"
      />
      <TimelineItem
        version="Versión 1.2"
        date="24 de junio de 2022"
        description={[
          'Se añadieron las categorías de productos, lo que facilitaba la organización y búsqueda de los mismos.',
          'Los productos ahora pueden ser agrupados en categorías para una gestión más eficiente.',
          'Se corrigieron errores menores reportados por los usuarios.',
        ]}
        position="left"
      />
      <TimelineItem
        version="Versión 1.1"
        date="18 de mayo de 2022"
        description={[
          'Se agregó un módulo de proveedores que permitía registrar información asociada a ellos.',
          'Ahora se podía gestionar los proveedores desde el sistema.',
          'Se mejoró la navegación y la apariencia del software para ofrecer una mejor experiencia de usuario.',
        ]}
        position="right"
      />
      <TimelineItem
        version="Versión 1.0"
        date="12 de abril de 2022"
        description={[
          'Se desarrolló un sistema de compra, venta e inventario para la empresa de Productos Veterinarios Mimados.',
          'La versión inicial del software permitía agregar y editar productos, así como realizar ventas sin generar facturas.',
          'La interfaz de usuario presentaba deficiencias en cuanto a usabilidad y no era amigable.',
        ]}
        position="left"
      />
    </div>
  );
};

export default Timeline;
