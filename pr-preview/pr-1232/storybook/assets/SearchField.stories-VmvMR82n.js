import{r as m,f as l,j as t}from"./iframe-CFSsLpc3.js";import{S as d}from"./SearchField-CY4kG7eI.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-ra44YpvH.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CgvAx7Eh.js";import"./clsx-B-dksMZM.js";import"./Form-DqURqGCQ.js";import"./useFocusRing-BscyqCba.js";import"./index-ov8VoHM9.js";import"./index-B-NeDNxk.js";import"./Input-DlF7f-nw.js";import"./Hidden-CLuFLk7t.js";import"./Button-BA4ocZWH.js";import"./useLabel-3d-jaeMs.js";import"./useLabels-CNE6UZfT.js";import"./useButton-ddrptB5P.js";import"./FieldError-D6ZDrv96.js";import"./Text-CxyFIK0P.js";import"./clsx-Ciqy0D92.js";import"./Text-DJekINTm.js";import"./RSPContexts-Dl7sCpzY.js";import"./Group-Db9bSCAd.js";import"./useControlledState-CbBMw6Jg.js";import"./useLocalizedStringFormatter-kozoot1o.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B4DwmSYD.js";import"./useField-CPTxJIMP.js";import"./TextField.module-DdivwlC8.js";import"./search-BAB6M6Wp.js";import"./createLucideIcon-DwZpSpKK.js";import"./x-BqPwmm8B.js";import"./useLocalizedStringFormatter-9a5YAOSR.js";import"./Button-BpZ-gEJa.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CJUN9Oa8.js";import"./Collection-Cd7KKzRT.js";import"./index-OvV4dgoH.js";import"./DragAndDrop-C4lzotPp.js";import"./getScrollParent-meA_uFiD.js";import"./scrollIntoView-DIXoB_F8.js";import"./SelectionIndicator-8krNnwqX.js";import"./SelectionManager-88QcvJjb.js";import"./useEvent-DS2KGNQU.js";import"./useDescription-DR9fGcHM.js";import"./inertValue-yyZ1Cbbp.js";import"./useHighlightSelectionDescription-BYAlR4AM.js";import"./useUpdateEffect-BcB2IZgf.js";import"./ListKeyboardDelegate-DF2nCrcP.js";import"./useHasTabbableChild-BxZFX4TK.js";import"./Checkbox-B2WI4JQZ.js";import"./check-BC0jy5p5.js";import"./useToggleState-DvUZEIsi.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
