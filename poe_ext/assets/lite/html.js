var pageHTML = '' +
'<div class="navbar navbar-fixed-top">' +
'  <div class="navbar-inner">' +
'    <div class="container">' +
'' +
'      <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">' +
'        <span class="icon-bar"></span>' +
'        <span class="icon-bar"></span>' +
'        <span class="icon-bar"></span>' +
'      </a>' +
'' +
'      <a class="brand" href="#">PoE Helper</a>' +
'      <span class="pull-right navbar-text" id="version"></span>' +
'' +
'      <div class="nav-collapse">' +
'' +
'' +
'        <ul class="nav">' +
'' +
'		  <li class="dropdown" id="menuLeague">' +
'		    <a class="dropdown-toggle" data-toggle="dropdown" href="#menuLeague">' +
'		      League' +
'		      <b class="caret"></b>' +
'		    </a>' +
'' +
'		    <ul class="dropdown-menu" id="leagueSelector">' +
'              <li><a>Loading...</a></li>' +
'		    </ul>' +
'		  </li>' +
'' +
'' +
'' +
'' +
'' +
'		  <li class="dropdown" id="menuRefresh">' +
'		    <a class="dropdown-toggle" data-toggle="dropdown" href="#menuRefresh">' +
'		      Refresh' +
'		      <b class="caret"></b>' +
'		    </a>' +
'		    <ul class="dropdown-menu" >' +
'              <li><a id="refresh">Full</a></li>' +
'              <li><a id="partRefresh">Partial</a></li>' +
'		    </ul>' +
'		  </li>' +
'' +
'' +
'' +
'		  <li class="dropdown" id="menu2">' +
'		    <a class="dropdown-toggle" data-toggle="dropdown" href="#menu2">' +
'		      Crafting' +
'		      <b class="caret"></b>' +
'		    </a>' +
'		    <ul class="dropdown-menu"  id="craftingTabs">' +
'              <li class="crafting-page"><a>No League Selected</a></li>' +
'		    </ul>' +
'		  </li>' +
'' +
'' +
'		  <li class="dropdown" id="menu3">' +
'		    <a class="dropdown-toggle" data-toggle="dropdown" href="#menu3">' +
'		      Inventory' +
'		      <b class="caret"></b>' +
'		    </a>' +
'		    <ul class="dropdown-menu" id="rares_menu">' +
'				<li><a id="openRareList">View</a></li>' +
'				<li class="divider"></li>' +
'				<li><a id="openDisplaySelection" data-toggle="modal" href="#inventoryDisplay">Configure Display</a></li>' +
'				<li><a id="openColSelection" data-toggle="modal" href="#inventoryCols">Configure Columns</a></li>' +
'				<li><a id="openItemSelection" data-toggle="modal" href="#inventoryItems">Configure Items</a></li>' +
'				<li class="divider"></li>' +
'				<li><a id="copyItemCSV">Copy as CSV</a></li>' +
'				<li><a id="saveAllItems" download="poe_ext.poe">Export to File</a></li>' +
'		    </ul>' +
'		  </li>' +
'' +
'		  <li class="dropdown" id="menu1">' +
'		    <a class="dropdown-toggle" data-toggle="dropdown" href="#menu1">' +
'		      Clipboard' +
'		      <b class="caret"></b>' +
'		    </a>' +
'		    <ul class="dropdown-menu">' +
'              <li><a id="copyToClipboard">Copy Rares</a></li>' +
'              <li><a id="copyFromClipboard">Compare Rares</a></li>' +
'		    </ul>' +
'		  </li>' +
'' +
'          <li><a href="http://www.pathofexile.com/forum/view-thread/42272" target="_blank">Feedback</a></li>' +
'        </ul>' +
'      </div><!--/.nav-collapse -->' +
'' +
'    </div>' +
'' +
'' +
'' +
'  </div>' +
'</div>' +
'' +
'<div class="container" id="bodycontainer">' +
'' +
'	<div id="err"></div>' +
'' +
'	<div id="crafting-content">' +
'' +
'	</div>' +
'' +
'	<p><p>' +
'' +
'	<div id="output"></div>' +
'' +
'	<p>' +
'' +
'	<div id="rareList"></div>' +
'' +
'	<div class="modal hide" id="clipboardMatch">' +
'	  <div class="modal-header">' +
'	    <h3>Clipboard Match</h3>' +
'	  </div>' +
'	  <div class="modal-body">' +
'	  </div>' +
'	  <div class="modal-footer">' +
'	    <a href="#" class="btn" data-dismiss="modal">Close</a>' +
'	  </div>' +
'	</div>' +
'' +
'	<div class="modal hide" id="inventoryDisplay">' +
'	  <div class="modal-header">' +
'	    <h3>Configure Display</h3>' +
'	  </div>' +
'	  <div class="modal-header">' +
'	    	<h3>Location</h3>' +
'			<ul id="inventoryLocation" class="unstyled">' +
'				<label class="checkbox"><input type="checkbox" class="checkboxBoss" data-target="#hideLocationTable" id="showInventoryLocationTable">Show Location Table</input></label>' +
'			</ul>' +
'	  </div>' +
'	  <div class="modal-footer">' +
'	    <a href="#" class="btn" data-dismiss="modal">Close</a>' +
'	    <a href="#" class="btn btn-primary" data-dismiss="modal" id="applyDisplaySelection">Apply</a>' +
'	  </div>' +
'	</div>' +
'' +
'	<div class="modal hide" id="inventoryCols">' +
'	  <div class="modal-header">' +
'	    <h3>Select Columns</h3>' +
'	  </div>' +
'	  <div class="modal-body">' +
'	    	<h3>Properties</h3>' +
'	    	<ul id="viewProps" class="unstyled"></ul>' +
'	    	<div class="clearfix"></div>' +
'	    	<h3>Mods</h3>' +
'	    	<ul id="viewMods" class="unstyled"></ul>' +
'	    	<div class="clearfix"></div>' +
'	    	<h3>Calculated</h3>' +
'	    	<ul id="viewCalculated" class="unstyled"></ul>' +
'	    	<div class="clearfix"></div>' +
'	    	<h3>Requirements</h3>' +
'	    	<ul id="viewReqs" class="unstyled"></ul>' +
'	    	<div class="clearfix"></div>' +
'	  </div>' +
'	  <div class="modal-footer">' +
'	    <a href="#" class="btn pull-left" id="resetCols">Clear Selection</a>' +
'	    <a href="#" class="btn" data-dismiss="modal">Close</a>' +
'	    <a href="#" class="btn btn-primary" data-dismiss="modal" id="applyColSelection">Apply</a>' +
'	  </div>' +
'	</div>' +
'' +
'	<div class="modal hide" id="inventoryItems">' +
'	  <div class="modal-header">' +
'	    <h3>Select Items</h3>' +
'	  </div>' +
'	  <div class="modal-body">' +
'	    	<h3>' +
'	    		<label class="checkbox"><input type="checkbox" class="checkboxBoss" data-target="#viewCategories" checked id="toggleCategories">Types</input></label>' +
' 			<a class="btn-small" href="#" data-toggle="collapse" data-target="#viewCategories"><i class="icon-chevron-down"></i></a>' +
' 		</h3>' +
'	    	<ul id="viewCategories" class="collapse" style="list-style:none;"></ul>' +
'	    	<div class="clearfix"></div>' +
'	    	<h3>' +
'	    		<label class="checkbox"><input type="checkbox" class="toggleCheckboxes" checked data-toggling="viewRarity" id="toggleRarity">Rarity</input></label>' +
' 				<a class="btn-small" href="#" data-toggle="collapse" data-target="#viewRarity"><i class="icon-chevron-down"></i></a>' +
' 			</h3>' +
'	    	<ul id="viewRarity" class="unstyled collapse"></ul>' +
'	    	<div class="clearfix"></div>' +
'	  </div>' +
'	  <div class="modal-footer">' +
'	    <a href="#" class="btn" data-dismiss="modal">Close</a>' +
'	    <a href="#" class="btn btn-primary" data-dismiss="modal" id="applyItemSelection">Apply</a>' +
'	  </div>' +
'	</div>' +
'' +
'	<div class="modal hide" id="refreshSelection">' +
'	  <div class="modal-header">' +
'	    <h3>Partial Refresh</h3>' +
'	  </div>' +
'	  <div class="modal-body">' +
'	    	<h4>Characters</h3>' +
'	    	<ul id="refreshChars" class="unstyled"></ul>' +
'	    	<div class="clearfix"></div>' +
'	    	<h3>Tabs</h3>' +
'	    	<ul id="refreshTabs" class="unstyled"></ul>' +
'	  </div>' +
'	  <div class="modal-footer">' +
'	    <a href="#" class="btn" data-dismiss="modal">Close</a>' +
'	    <a href="#" class="btn btn-primary" data-dismiss="modal" id="applyPartialRefresh">Apply</a>' +
'	  </div>' +
'	</div>' +
'' +
'	<div class="modal hide" id="craftingFilters">' +
'	  <div class="modal-header">' +
'	    <h3>Configure Crafting</h3>' +
'	  </div>' +
'	  <div class="modal-body">' +
'	    	<h3>Ignore Character Inventory</h3>' +
'	    	<ul id="craftingIgnoreChars" class="unstyled"></ul>' +
'	    	<div class="clearfix"></div>' +
'	    	<h3>Ignore Stash</h3>' +
'	    	<ul id="craftingIgnoreTabs" class="unstyled"></ul>' +
'	  </div>' +
'	  <div class="modal-footer">' +
'	  	<ul id="craftingLocation" class="unstyled pull-left">' +
'	  		<li>' +
'			  	<input type="checkbox" class="checkboxBoss pull-left" data-target="#hideLocationTable" id="showCraftingLocationTable"/>' +
'				<label class="checkbox" for="showCraftingLocationTable">Show Location Table</label>' +
'			</li>' +
'		</ul>' +
'	    <a href="#" class="btn" data-dismiss="modal">Close</a>' +
'	    <a href="#" class="btn btn-primary" data-dismiss="modal" id="applyIgnoreLocations">Apply</a>' +
'	  </div>' +
'	</div>' +
'' +
'	<canvas id="tmpCanvas" width="100" height="100" style="visibility:hidden;"></canvas>' +
'' +
'	<p style="height:400px;">&nbsp;</p>' +
'' +
'</div> <!-- /container -->';