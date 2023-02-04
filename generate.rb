require 'yaml'
require 'erb'

config = YAML.load(File.open('svg-conf.yml'))
characters = YAML.load(File.open('characters.yml'))

characters.each do |character|

	id = character['id'].to_i
	desc = character['desc']
	pixels = []
	i = 0
	character['pixels'].each do |row|
		columns = []
		pixels.push(columns)
		j = 0
		row.split(" ").map { |i| i.to_i }.each do |column|
			char_pixel = {}
			char_pixel['active'] = (column == 1)
			char_pixel['color'] = config['color']
			char_pixel['x'] = config['offsets']['x'].split(" ")[j]
			char_pixel['y'] = config['offsets']['y'].split(" ")[i]
			columns.push(char_pixel)
			j+=1
		end
		i+=1
	end

	template = ERB.new(File.new('mid-pixels.svg.erb').read, trim_mode: '%<>')
	filename = 'out/%03d.svg' % id
	puts "Created character #{desc} in file #{filename}"
	File.open(filename, 'w') do |f|
		f << template.result(binding).gsub(/^\s+/, '')
	end

end

template = ERB.new(File.new('index.erb').read, trim_mode: '%<>')
filename = 'out/index.html'
puts "Created #{filename}"
File.open(filename, 'w') do |f|
	f << template.result(binding).gsub(/^\s+/, '')
end


# https://github.com/FontCustom/fontcustom
# then run
# $ fontcustom compile out/
