import{r as m,f as l,j as t}from"./iframe-CidOCZHB.js";import{S as d}from"./SearchField-CSzdbyNe.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DKxJuiHC.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D0gzrqio.js";import"./utils-8aJjhqNc.js";import"./useLocalizedStringFormatter-DaU6bXbA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DWeJsMa4.js";import"./useFocusRing-B8BRQkLp.js";import"./index-BBVZX2NF.js";import"./index--plQHcpZ.js";import"./useFormValidation-ndTLYSbE.js";import"./useField-BWNPjLgU.js";import"./Button-DuriNJcC.js";import"./Hidden-CVjT_yJa.js";import"./useLabels-CL1SuhzR.js";import"./useButton-Bq1zX9NI.js";import"./search-Czrzo_vh.js";import"./createLucideIcon-bGF3Re28.js";import"./ClearButton-ddZTXUYu.js";import"./Button-DvQa6ahi.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B0fC8SpF.js";import"./VisuallyHidden-jV2krERt.js";import"./x-CszgniqU.js";import"./FieldError-DXanqLob.js";import"./Text-FUR3GSSr.js";import"./Text-DVNzE23j.js";import"./RSPContexts-BO4m8Pb5.js";import"./Collection-wA-FRPUr.js";import"./index-BUoRUjYH.js";import"./DragAndDrop-C2B-Qig2.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BUwiPRdS.js";import"./SelectionManager-CtD_R6y9.js";import"./useEvent-BYzozCP5.js";import"./useDescription-D7W5dV4U.js";import"./inertValue-C9AHttwY.js";import"./useHighlightSelectionDescription-ao-rUA6l.js";import"./useUpdateEffect-Drmp26c1.js";import"./ListKeyboardDelegate-DhfROc2n.js";import"./useHasTabbableChild-S3RETCXo.js";import"./Checkbox-Dm0SbFSb.js";import"./Form-Bvf6FYQl.js";import"./check-DUZ_uE6E.js";import"./useToggleState-DU7xp9Jl.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
