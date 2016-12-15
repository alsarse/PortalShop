-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-12-2016 a las 07:54:48
-- Versión del servidor: 10.1.9-MariaDB
-- Versión de PHP: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_tienda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_categoria` varchar(3) NOT NULL,
  `nombre_categoria` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id_categoria`, `nombre_categoria`) VALUES
('ACC', 'Accesorios'),
('ART', 'Artbooks'),
('CAM', 'Camisetas'),
('EST', 'Estatuas'),
('FIG', 'Figuras'),
('JUE', 'Juegos de mesa'),
('PEL', 'Peluches'),
('POS', 'Posters'),
('SUD', 'Sudaderas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historicos`
--

CREATE TABLE `historicos` (
  `usuario` varchar(25) NOT NULL,
  `prod_id` varchar(5) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `prod_id` varchar(5) NOT NULL,
  `prod_name` varchar(100) NOT NULL,
  `prod_price` float NOT NULL,
  `id_categoria` varchar(3) NOT NULL,
  `tags` set('sales','project','premium') NOT NULL,
  `img_route` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`prod_id`, `prod_name`, `prod_price`, `id_categoria`, `tags`, `img_route`) VALUES
('ACC01', 'Alfombrilla para el raton de Aguas Estancadas', 18, 'ACC', '', 'https://euw.merch.riotgames.com/media/catalog/product/cache/71/small_image/325x/9df78eab33525d08d6e5fb8d27136e95/i/m/image_8.png'),
('ACC02', 'Gorro de Teemo', 20, 'ACC', '', 'http://gamingparaguay.com/wp-content/uploads/2016/03/teemo-gorro.png'),
('ACC03', 'Mochila de LoL: Campeones', 50, 'ACC', '', 'https://euw.merch.riotgames.com/media/catalog/product/cache/71/small_image/325x/9df78eab33525d08d6e5fb8d27136e95/2/0/2016-08-02-riot-games10807.png'),
('ACC04', 'PROYECTO: Pulsera', 10, 'ACC', 'project', 'https://euw.merch.riotgames.com/media/catalog/product/cache/71/image/570x/9df78eab33525d08d6e5fb8d27136e95/i/m/image_74.png'),
('ACC05', 'Alfombrilla para el raton de Freljord', 18, 'ACC', '', 'https://euw.merch.riotgames.com/media/catalog/product/cache/71/image/570x/9df78eab33525d08d6e5fb8d27136e95/f/m/fmousepad.png'),
('ART01', 'El arte de LoL: Volumen I(Edicion coleccionista)', 150, 'ART', 'premium', 'https://euw.merch.riotgames.com/media/catalog/product/cache/71/small_image/325x/9df78eab33525d08d6e5fb8d27136e95/r/i/riotbook-278.png'),
('ART02', 'El arte de League of Legends: Volumen I ', 75, 'ART', '', 'https://euw.merch.riotgames.com/media/catalog/product/cache/71/small_image/325x/9df78eab33525d08d6e5fb8d27136e95/r/i/riotbook-246.png'),
('CAM01', 'PROJECTO: Lucian Tee', 20, 'CAM', 'project', 'https://euw.merch.riotgames.com/media/catalog/product/cache/71/image/570x/9df78eab33525d08d6e5fb8d27136e95/p/r/project_luc_ecomm_1kx1k.png'),
('CAM02', 'Camiseta esquematica de Heimerdinger ', 20, 'CAM', '', 'https://euw.merch.riotgames.com/media/catalog/product/cache/71/small_image/325x/9df78eab33525d08d6e5fb8d27136e95/h/e/heim_ecomm_1kx1k.png'),
('CAM03', 'Camiseta de deleite lunar (Mujer)', 20, 'CAM', '', 'https://euw.merch.riotgames.com/media/catalog/product/cache/71/small_image/325x/9df78eab33525d08d6e5fb8d27136e95/i/m/image_58.png'),
('CAM04', 'Camiseta El orgullo de Piltover', 20, 'CAM', '', 'https://euw.merch.riotgames.com/media/catalog/product/cache/71/small_image/325x/9df78eab33525d08d6e5fb8d27136e95/p/i/piltover_s-finest-_m_-28608.png'),
('EST01', 'Estatua de Twisted Fate', 250, 'EST', 'premium', 'https://euw.merch.riotgames.com/media/catalog/product/cache/71/small_image/325x/9df78eab33525d08d6e5fb8d27136e95/t/w/twistedfatefront.png'),
('EST02', 'Estatua de Ziggs', 150, 'EST', '', 'https://euw.merch.riotgames.com/media/catalog/product/cache/71/small_image/325x/9df78eab33525d08d6e5fb8d27136e95/z/i/ziggs_main.png'),
('EST3', 'Ashe Unlocked', 85, 'EST', '', 'https://euw.merch.riotgames.com/media/catalog/product/cache/71/small_image/325x/9df78eab33525d08d6e5fb8d27136e95/a/s/ashe_riot_games-2016-10-26_figures_statues_1508_copy.png'),
('FIG01', 'Figura de accion de PROYECTO: Fiora', 20, 'FIG', 'project', 'https://euw.merch.riotgames.com/media/catalog/product/cache/71/small_image/325x/9df78eab33525d08d6e5fb8d27136e95/i/m/image_83.png'),
('FIG02', 'Figura de Riven de campeonato', 20, 'FIG', '', 'https://euw.merch.riotgames.com/media/catalog/product/cache/71/small_image/325x/9df78eab33525d08d6e5fb8d27136e95/c/h/championship-riven-2_1_2_.png'),
('FIG03', 'Figura de accion de PROYECTO: Zed', 20, 'FIG', 'project', 'https://euw.merch.riotgames.com/media/catalog/product/cache/71/small_image/325x/9df78eab33525d08d6e5fb8d27136e95/i/m/image_86.png'),
('JUE01', 'Mechs vs. Minions ', 75, 'JUE', 'premium', 'https://euw.merch.riotgames.com/media/catalog/product/cache/71/small_image/325x/9df78eab33525d08d6e5fb8d27136e95/m/v/mvm_box_1.png'),
('PEL01', 'Peluche de Gnar', 30, 'PEL', '', 'https://euw.merch.riotgames.com/media/catalog/product/cache/71/small_image/325x/9df78eab33525d08d6e5fb8d27136e95/i/m/image_49.png'),
('PEL02', 'Peluche de Teemo Conejo', 25, 'PEL', '', 'https://euw.merch.riotgames.com/media/catalog/product/cache/71/small_image/325x/9df78eab33525d08d6e5fb8d27136e95/p/l/plush_gray_cottontail_masked.png'),
('PEL03', 'Peluche de Tibbers', 30, 'PEL', '', 'https://euw.merch.riotgames.com/media/catalog/product/cache/71/small_image/325x/9df78eab33525d08d6e5fb8d27136e95/p/l/plush_tibbers.png'),
('PEL04', 'Peluche de Lulu', 25, 'PEL', '', 'https://euw.merch.riotgames.com/media/catalog/product/cache/71/small_image/325x/9df78eab33525d08d6e5fb8d27136e95/l/u/lulu-01_2.png'),
('PEL05', 'Peluche de Poro', 20, 'PEL', '', 'https://euw.merch.riotgames.com/media/catalog/product/cache/71/small_image/325x/9df78eab33525d08d6e5fb8d27136e95/p/l/plush_poro.png'),
('POS01', 'Ahri contra Morgana (68,5 x 101,6 cm)', 15, 'POS', '', 'https://euw.merch.riotgames.com/media/catalog/product/cache/71/image/570x/9df78eab33525d08d6e5fb8d27136e95/i/m/image.png'),
('POS02', 'Twisted Fate contra Graves (68,5 x 101,6 cm)', 15, 'POS', '', 'https://euw.merch.riotgames.com/media/catalog/product/cache/71/image/570x/9df78eab33525d08d6e5fb8d27136e95/t/f/tfgraves.png'),
('POS03', 'Jinx contra Vi (68,5 x 101,6 cm)', 15, 'POS', '', 'https://euw.merch.riotgames.com/media/catalog/product/cache/71/image/570x/9df78eab33525d08d6e5fb8d27136e95/i/m/image_6.png'),
('SUD01', 'Sudadera premium fosforescente de Thresh', 80, 'SUD', 'premium', 'https://euw.merch.riotgames.com/media/catalog/product/cache/71/small_image/325x/9df78eab33525d08d6e5fb8d27136e95/t/h/threshhoodie_unisex_1_2.png'),
('SUD02', 'Sudadera premium de League of Legends (Mujer)', 60, 'SUD', 'premium', 'https://euw.merch.riotgames.com/media/catalog/product/cache/71/small_image/325x/9df78eab33525d08d6e5fb8d27136e95/l/o/lolhoodie_womens_1.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `username` varchar(25) NOT NULL,
  `password` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`username`, `password`) VALUES
('admin', '21232f297a57a5a743894a0e4a801fc3');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `historicos`
--
ALTER TABLE `historicos`
  ADD PRIMARY KEY (`usuario`,`prod_id`,`fecha`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`prod_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`username`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
