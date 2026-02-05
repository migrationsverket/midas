import{r as m,f as l,j as t}from"./iframe-BXL4RoxG.js";import{S as d}from"./SearchField-CjLjVDOm.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BqINJ7RY.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-ChSuwDfw.js";import"./utils-Bf3izy9L.js";import"./useLocalizedStringFormatter-DY1IbHJs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CYJLKcrM.js";import"./useFocusRing-CFKLadQc.js";import"./index-ChlQ7hUJ.js";import"./index-CVQMxt-B.js";import"./useFormValidation-FE3EiiUh.js";import"./useField-BUvuIleD.js";import"./Button-D88wRmT9.js";import"./Hidden-Budc0me5.js";import"./useLabels-ZcBmnljP.js";import"./useButton-Q5MxpZ0c.js";import"./search-BdgpnvMY.js";import"./createLucideIcon-Bt1FuSTk.js";import"./ClearButton-BpYDho6t.js";import"./Button-BPaLzN_1.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CLNeHttS.js";import"./VisuallyHidden-BNHdTIn0.js";import"./x-CVk2stH6.js";import"./FieldError-7f6dpKUo.js";import"./Text-D5IutxNH.js";import"./Text-CdHl8okE.js";import"./RSPContexts-D1_gZHxa.js";import"./Collection-BUCl8sbC.js";import"./index-CbT-VxX9.js";import"./DragAndDrop--XJSqHrJ.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DdQwwOmx.js";import"./SelectionManager-CN4RD3Ps.js";import"./useEvent-C9ZgQidS.js";import"./useDescription-B2r5uC_Z.js";import"./inertValue-AW6RDHY8.js";import"./useHighlightSelectionDescription-Cp67vu7x.js";import"./useUpdateEffect-Cl0VjzQk.js";import"./ListKeyboardDelegate-DVDCpycQ.js";import"./useHasTabbableChild-xApzAaJW.js";import"./Checkbox-QpCLGm7s.js";import"./Form-CQLrd3dC.js";import"./check-CFJsN1sH.js";import"./useToggleState-B2TCDW_G.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
