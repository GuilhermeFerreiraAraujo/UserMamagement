/*    ==Scripting Parameters==

    Source Server Version : SQL Server 2016 (13.0.4001)
    Source Database Engine Edition : Microsoft SQL Server Express Edition
    Source Database Engine Type : Standalone SQL Server

    Target Server Version : SQL Server 2016
    Target Database Engine Edition : Microsoft SQL Server Express Edition
    Target Database Engine Type : Standalone SQL Server
*/

USE [UserManagment]
GO

/****** Object:  Table [dbo].[Users]    Script Date: 03/06/2018 09:52:42 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Users](
	[FullName] [varchar](100) NOT NULL,
	[Description] [varchar](250) NOT NULL,
	[Motto] [varchar](250) NOT NULL,
	[Hobbies] [varchar](250) NOT NULL,
	[HomeTown] [varchar](250) NOT NULL,
	[PersonalBlog] [varchar](250) NOT NULL,
	[Id] [varchar](250) NOT NULL,
	[Img] [varchar](250) NULL,
	[Image] [varchar](max) NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


