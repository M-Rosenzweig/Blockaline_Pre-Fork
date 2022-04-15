# Seeker.destroy_all
# Job.destroy_all
# Application.destroy_all
# Company.destroy_all
# Favorite.destroy_all

s1 = Seeker.create(name:'Alex', email:'alex.manzi22@gmail.com', profession:'Software Engineer', resume: false)
s2 = Seeker.create(name:'Moshe', email:'rosenvibes@gmail.com', profession:'Software Engineer', resume: false)

c1 = Company.create(title:'Flatiron', mission_statement:'Build Better Tech', tags: 'Positive, Upbeat, Fun', rating:5)


j1 =Job.create(title:"Flatiron Ceo", description:"Be a Boss", company:c1, benefits:"Cash", remote:false, hybrid: true)

Application.create(seeker:s1, job:j1, accepted:false)
Application.create(seeker:s2, job:j1, accepted:false)


Favorite.create(seeker:s1, job:j1)
Favorite.create(seeker:s2, job:j1)