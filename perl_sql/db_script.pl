use DBI;
my $dbfile = "database.sqlite3";
my $dbh = DBI->connect("dbi:SQLite:dbname=$dbfile","","");
$sth = $dbh->prepare("SELECT * FROM users;");
$sth->execute();

print "users table\n";
print "\tfirst_name\t|\tlast_name\t|\thome\n";

# Horizontal Bar
for ($x = 0; $x < 80; $x += 1) {
  print "-"
}
print "\n";

my $rows = $sth.fetch;
my $row;
while ($row = $sth->fetchrow_arrayref()) {
    print "@$row[0]\t";       # id
    print "@$row[1]\t\t|";    # first_name
    print "\t@$row[2]\t\t|";  # last_name
    print "\t@$row[3]\n";     # home
}

$sth->finish();
$dbh->disconnect();