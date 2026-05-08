import{r as m,f as l,j as t}from"./iframe-C5ngTzwY.js";import{S as d}from"./SearchField-CmXizecL.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-D2507CcD.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dg8dAIMb.js";import"./clsx-B-dksMZM.js";import"./Form-CItLNKU2.js";import"./useFocusRing-widihIkF.js";import"./index-q0KT5jnp.js";import"./index-Ccze4rZ3.js";import"./Input-DrXI5JNl.js";import"./Hidden-D_4pS1pD.js";import"./Button-CG1C0RCC.js";import"./useLabel-Dvu8tBif.js";import"./useLabels-DAN8PIoI.js";import"./useButton-BWnFtbTH.js";import"./FieldError-BAFjpL0i.js";import"./Text-Dao-YHjx.js";import"./clsx-Ciqy0D92.js";import"./Text-BREpfkEt.js";import"./RSPContexts-lIIzFU1O.js";import"./Group-BmSX7JQZ.js";import"./useControlledState-xqz1UZWj.js";import"./useLocalizedStringFormatter-ByZ5j5zE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CMupa5sr.js";import"./useField-5SggJKuz.js";import"./TextField.module-DdivwlC8.js";import"./search-JvVSxOeX.js";import"./createLucideIcon-Ctpe4pW9.js";import"./x-CYTkygL5.js";import"./useLocalizedStringFormatter-DgMvPFf5.js";import"./Button-paZ2bXFh.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B1SQTSBU.js";import"./Collection-CqD_Mfx9.js";import"./index--mPa9dWU.js";import"./DragAndDrop-CKx6lkFo.js";import"./getScrollParent-DY1wappT.js";import"./scrollIntoView-CSaBvUCD.js";import"./SelectionIndicator-CNfIOHhB.js";import"./SelectionManager-ClM-GsI7.js";import"./useEvent-DJU-p8Vq.js";import"./useDescription-DWjqWAOZ.js";import"./inertValue-DPQuSyAI.js";import"./useHighlightSelectionDescription-vKyhitRM.js";import"./useUpdateEffect-1i9OlQXC.js";import"./ListKeyboardDelegate-DojHSTUI.js";import"./useHasTabbableChild-DvEgliWs.js";import"./Checkbox-Bqfjp4VX.js";import"./check-B8_1l3uM.js";import"./useToggleState-C-TE1eDB.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
