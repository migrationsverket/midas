import{r as m,f as l,j as t}from"./iframe-D-2Z30c8.js";import{S as d}from"./SearchField-BuAxPDhO.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C-KmjkqH.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DQ7Q1QxO.js";import"./utils-DNydHYc7.js";import"./useLocalizedStringFormatter-BGPhrwPv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CSjh0vYN.js";import"./useFocusRing-DHbfBmoZ.js";import"./index-CXlyEFlC.js";import"./index-y-LtlDB7.js";import"./useFormValidation-g9InWXfo.js";import"./useField-Cm8tVB4V.js";import"./Button-B7aUUd8D.js";import"./Hidden-CvH6QNsS.js";import"./useLabels-BRLzE6Cb.js";import"./useButton-E9BEr0uy.js";import"./search-7IJV4PFh.js";import"./createLucideIcon-DQV7tCjS.js";import"./ClearButton-Dv8GLJ7s.js";import"./Button-Do142c3E.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DgZG97CC.js";import"./VisuallyHidden-G01riaNf.js";import"./x-DCcFjLN0.js";import"./FieldError-CSFHdZGJ.js";import"./Text-CDWb81vy.js";import"./Text-CwJkDPGR.js";import"./RSPContexts-DqxaNqYF.js";import"./Collection-BUKZd-PH.js";import"./index-B-bagfVX.js";import"./DragAndDrop-CSEJ5Hbo.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D08Kxu1u.js";import"./SelectionManager-CCPHjx2I.js";import"./useEvent-D8Y6SyA6.js";import"./useDescription-D38Fa9LD.js";import"./inertValue-BJeyxMDZ.js";import"./useHighlightSelectionDescription-DSaPywuT.js";import"./useUpdateEffect-Dg1Hf5ps.js";import"./ListKeyboardDelegate-enAcSWZ-.js";import"./useHasTabbableChild-DDfw1tOT.js";import"./Checkbox-CjAn5p4a.js";import"./Form-GyyhpmPV.js";import"./check-C49go5tp.js";import"./useToggleState-CC8rd5MX.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
