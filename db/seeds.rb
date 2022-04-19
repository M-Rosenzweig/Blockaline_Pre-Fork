# Seeker.destroy_all
# Job.destroy_all
# Application.destroy_all
# Company.destroy_all
# Favorite.destroy_all

s1 = Seeker.create(first_name:'Alex', last_name:'Manzi', email:'alex.manzi22@gmail.com', frontier:'Software Engineer', password_digest:"Alex")
s2 = Seeker.create(first_name:'Moshe', last_name:'Rosenzweig', email:'rosenvibes@gmail.com', frontier:'Software Engineer', password_digest:"Moish")


c1 = Company.create(title:'Flatiron', mission_statement:'We’re committed to helping people learn the skills they need to change their lives and the world for the better.', tags: 'Positive, Upbeat, Fun', rating:5)
c2 = Company.create(title:'Alibaba Group', mission_statement: 'To make it easy to do business anywhere.', tags: 'Positive, Upbeat, Fun', rating:5)
c3 = Company.create(title:'Linkedin', mission_statement:'To connect the world’s professionals to make them more productive and successful.', tags: 'Positive, Upbeat, Fun', rating:5)
c4 = Company.create(title:'Facebook', mission_statement:'To give people the power to share and make the world more open and connected.', tags: 'Positive, Upbeat, Fun', rating:5)
c5 = Company.create(title:'Twitter', mission_statement:'To give everyone the power to create and share ideas and information instantly, without barriers.', tags: 'Positive, Upbeat, Fun', rating:5)
c6 = Company.create(title:'Paypal', mission_statement:'To build the Web’s most convenient, secure, cost-effective payment solution.', tags: 'Positive, Upbeat, Fun', rating:5)
c7 = Company.create(title:'Tesla', mission_statement:'Our goal when we created Tesla a decade ago was the same as it is today: to accelerate the advent of sustainable transport by bringing compelling mass market electric cars to market as soon as possible.', tags: 'Positive, Upbeat, Fun', rating:5)
c8 = Company.create(title:'Kickstarter', mission_statement:'To help bring creative projects to life.', tags: 'Positive, Upbeat, Fun', rating:5)
c9 = Company.create(title:'Asana', mission_statement:'To help humanity thrive by enabling all teams to work together effortlessly.', tags: 'Positive, Upbeat, Fun', rating:5)
c10 = Company.create(title:'Sony', mission_statement:'To be a company that inspires and fulfils your curiosity.', tags: 'Positive, Upbeat, Fun', rating:5)
c11 = Company.create(title:'Microsoft', mission_statement:'To enable people and businesses throughout the world to realize their full potential.', tags: 'Positive, Upbeat, Fun', rating:5)
c12 = Company.create(title:'Google', mission_statement: 'To organize the world’s information and make it universally accessible and useful.', tags: 'Positive, Upbeat, Fun', rating:5)
c13 = Company.create(title:'Intel', mission_statement:'Utilize the power of Moore’s Law to bring smart, connected devices to every person on earth.', tags: 'Positive, Upbeat, Fun', rating:5)


j1 =Job.create(title:"Flatiron Ceo", description:"Be a Boss", company:c1, benefits:"Cash", remote:false, hybrid: true)
j1 =Job.create(title:"Google Ceo", description:"Be a Boss", company:c2, benefits:"Cash", remote:false, hybrid: true)
j1 =Job.create(title:"Amazon Ceo", description:"Be a Boss", company:c3, benefits:"Cash", remote:false, hybrid: true)
j1 =Job.create(title:"Facebook Ceo", description:"Be a Boss", company:c4, benefits:"Cash", remote:false, hybrid: true)
j1 =Job.create(title:"Spotify Ceo", description:"Be a Boss", company:c5, benefits:"Cash", remote:false, hybrid: true)

Application.create(seeker:s1, job:j1, accepted:false)
Application.create(seeker:s2, job:j1, accepted:false)


Favorite.create(seeker:s1, job:j1)
Favorite.create(seeker:s2, job:j1)