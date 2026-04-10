import{r as m,f as l,j as t}from"./iframe-DbRIiPJf.js";import{S as d}from"./SearchField-CBBnlbZQ.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DhDCGOZD.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CylrHtqj.js";import"./clsx-B-dksMZM.js";import"./Form-DKNQStX3.js";import"./useFocusRing-CzsT9eqz.js";import"./index-CWx_6wJr.js";import"./index-CYF8mrWB.js";import"./Input-DBUD3kdX.js";import"./Hidden-CLmG6Qjv.js";import"./Button-Bu-vq5J8.js";import"./useLabel-D5V8M1AU.js";import"./useLabels-CWkCWE-a.js";import"./useButton-ydqzzVJH.js";import"./FieldError-BlTKrD9e.js";import"./Text-Bl7omTF2.js";import"./clsx-Ciqy0D92.js";import"./Text-BWzS2USX.js";import"./RSPContexts-RxxWGpWl.js";import"./Group-C_ZA0uHw.js";import"./useControlledState-CkgwQtqz.js";import"./useLocalizedStringFormatter-BhEsaq13.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Fl3Oq0YZ.js";import"./useField-Dc--rdEY.js";import"./TextField.module-DdivwlC8.js";import"./search-D9xRmRHp.js";import"./createLucideIcon-DWTxx8ko.js";import"./x-gq1nGzx6.js";import"./useLocalizedStringFormatter-Bz5dx8x0.js";import"./Button-ClLfQI_I.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-OjEI7nCv.js";import"./Collection-B4ubqx70.js";import"./index-BZFoeM-h.js";import"./DragAndDrop-DLngMwvt.js";import"./getScrollParent-B52noiPs.js";import"./scrollIntoView-DyOkJKzq.js";import"./SelectionIndicator-D8qE1ns6.js";import"./SelectionManager-DTAr5YEZ.js";import"./useEvent-BDJFflUb.js";import"./useDescription-o_hCOQgG.js";import"./inertValue-BW7Omm3R.js";import"./useHighlightSelectionDescription-CebLorEz.js";import"./useUpdateEffect-CH9ts1gJ.js";import"./ListKeyboardDelegate-B3d6mxcZ.js";import"./useHasTabbableChild-D-H3w-s2.js";import"./Checkbox-vmj-6u_8.js";import"./check-BY0PAhTl.js";import"./useToggleState-Cf2LHE29.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  render: function SimpleSearchComponent() {
    const columns: ColumnType[] = [{
      name: 'Frukt',
      id: 'fruit',
      isRowHeader: true
    }, {
      name: 'Beskrivning',
      id: 'description'
    }];
    const [searchTerm, setSearchTerm] = useState('');
    const [mockData] = useState<DataRow[]>(() => fruit.map((item, index) => ({
      id: index + 1,
      fruit: item.name,
      description: item.description
    })));
    const filteredData = mockData.filter(item => item.fruit.toLowerCase().includes(searchTerm.toLowerCase()));
    return <div style={{
      maxWidth: '400px',
      margin: '0 auto'
    }}>
        <SearchField placeholder='Sök efter en frukt...' buttonText='Sök' onSubmit={setSearchTerm} style={{
        width: '100%'
      }} />

        {searchTerm.length > 0 && (filteredData.length === 0 ? <p style={{
        marginTop: '10px'
      }}>Inga träffar</p> : <div style={{
        marginTop: '20px'
      }}>
              <Table aria-label='Fruit Table' style={{
          width: '100%'
        }}>
                <TableHeader>
                  {columns.map(column => <Column key={column.id} isRowHeader={column.isRowHeader ?? false}>
                      {column.name}
                    </Column>)}
                </TableHeader>
                <TableBody>
                  {filteredData.map(item => <Row key={item.id}>
                      {columns.map(column => <Cell key={column.id}>{item[column.id]}</Cell>)}
                    </Row>)}
                </TableBody>
              </Table>
            </div>)}
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const Se=["SimpleSearch"];export{i as SimpleSearch,Se as __namedExportsOrder,Te as default};
