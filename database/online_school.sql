-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 08, 2019 at 08:51 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 5.6.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `online_school`
--

-- --------------------------------------------------------

--
-- Table structure for table `course_result_tname_time`
--

CREATE TABLE `course_result_tname_time` (
  `Course` varchar(20) COLLATE utf8_bin NOT NULL,
  `StudentId` varchar(10) COLLATE utf8_bin NOT NULL,
  `Result` varchar(3) COLLATE utf8_bin NOT NULL,
  `TName` varchar(15) COLLATE utf8_bin NOT NULL,
  `Time` varchar(20) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `course_result_tname_time`
--

INSERT INTO `course_result_tname_time` (`Course`, `StudentId`, `Result`, `TName`, `Time`) VALUES
('ATP-lll', '16-32308-2', 'A+', 'Md Alamin', 'Sun 11.00 AM -2.00 P'),
('ATP-lll', '16-32308-2', 'A', 'Md Alamin', 'Sun 11.00 AM -2.00 P'),
('SQT', '16-32308-2', 'A+', 'Md Alamin', 'Mon 9.30AM- 11.00PM'),
('Micro', '16-32308-2', 'A+', 'Tahmida Islam', 'Mon 2.00PM- 5.00PM'),
('E_Shop', '16-32308-2', 'A-', 'MD Mannan', 'Tues 8.00AM-11.00Am'),
('Web_Tech', '16-32310-2', 'A-', 'Saifullah', 'Wed 2.00PM-5.00PM'),
('Data Structure', '16-32308-2', 'A', 'Umme Marzia', 'Mon 9.30AM-11.00AM'),
('Device', '16-32310-2', 'A+', 'Humayon Kabir', 'Mon 2.00PM- 3.30PM');

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `CourseId` varchar(10) COLLATE utf8_bin NOT NULL,
  `CourseName` varchar(40) COLLATE utf8_bin NOT NULL,
  `StudentId` varchar(10) COLLATE utf8_bin NOT NULL,
  `CourseTime` varchar(25) COLLATE utf8_bin NOT NULL,
  `Semester` varchar(10) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`CourseId`, `CourseName`, `StudentId`, `CourseTime`, `Semester`) VALUES
('158', 'Advance Computer Network', '16-32310-2', '', '1'),
('128', 'Software Quality And Testing', '16-32310-2', '', '1'),
('129', 'Advance Computer Network', '16-32308-2', '', '1'),
('132', 'Network Security', '16-32308-2', '', '1'),
('198', 'Database', '16-32308-2', '', '1');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `StudentId` varchar(10) COLLATE utf8_bin NOT NULL,
  `password` varchar(15) COLLATE utf8_bin NOT NULL,
  `Name` varchar(20) COLLATE utf8_bin NOT NULL,
  `Department` varchar(10) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`StudentId`, `password`, `Name`, `Department`) VALUES
('', '', '', ''),
('16-32308-2', 'siddique', 'Abu Bakar Siddique', 'CSE'),
('16-32310-2', 'alamin', 'MD ALAMIN', 'CSE');

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `Name` varchar(10) COLLATE utf8_bin NOT NULL,
  `Id` varchar(10) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`Name`, `Id`) VALUES
('Nayemur Ra', '16-32308-2');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
