import{r as m,f as l,j as t}from"./iframe-xM6GPlxZ.js";import{S as d}from"./SearchField-BRPoJXXO.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-EdI2rmkB.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C_N3S3lP.js";import"./utils-BWmJmXij.js";import"./useLocalizedStringFormatter-CX9bacHe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-JUSGFZfG.js";import"./useFocusRing-QfzGUTUK.js";import"./index-Cg05t2G5.js";import"./index-DC2xKSlP.js";import"./useFormValidation-6nG_QMyJ.js";import"./useField-DhjOGZIF.js";import"./Button-D0EwoScf.js";import"./Hidden-CNNVQzIs.js";import"./useLabels-C6Mi33Cz.js";import"./useButton-CI69bHTl.js";import"./search-CX_WidYH.js";import"./createLucideIcon-D-PEwym-.js";import"./ClearButton-CpeijWgy.js";import"./Button-CKxI1r1_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CfPLxaXy.js";import"./VisuallyHidden-Ck-DDgGV.js";import"./x-Bs38igXL.js";import"./FieldError-CI525PUG.js";import"./Text-eaDz3eV1.js";import"./Text-CHMvJdTr.js";import"./RSPContexts-CBBqJTPm.js";import"./Collection-DUrw-iXY.js";import"./index-q8a9In3r.js";import"./DragAndDrop-CcdIMJiu.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DUE9LE0r.js";import"./SelectionManager-e2Kt43cd.js";import"./useEvent-D1PWkF_3.js";import"./useDescription-DRbU8aXx.js";import"./inertValue-CqCUPGx1.js";import"./useHighlightSelectionDescription-DyqD2a3o.js";import"./useUpdateEffect-QeeTLylW.js";import"./ListKeyboardDelegate-BC8BrP6H.js";import"./useHasTabbableChild-DFHSHK1C.js";import"./Checkbox-C1c9CqcC.js";import"./Form-D-7e8gY8.js";import"./check-CwsgTExN.js";import"./useToggleState--oZM_I2S.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Te=["SimpleSearch"];export{i as SimpleSearch,Te as __namedExportsOrder,xe as default};
