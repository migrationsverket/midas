import{r as m,f as l,j as t}from"./iframe-CPHjxRlP.js";import{S as d}from"./SearchField-DXD7NM4W.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-D7xyTM79.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-kjVA7Iho.js";import"./utils-B-Qbv9d3.js";import"./useLocalizedStringFormatter-IAU1f4xs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-vTgUdtc7.js";import"./useFocusRing-DWjPv-Rc.js";import"./index-BH0p0wiY.js";import"./index-HgmA4Z-C.js";import"./useFormValidation-BoDlAAF1.js";import"./useField-X6ivfkc5.js";import"./Button-0oqu_HuR.js";import"./Hidden-BaLLinj_.js";import"./useLabels-JrHx6Rsk.js";import"./useButton-BM6c3a1z.js";import"./search-ZfIyoV5a.js";import"./createLucideIcon-iYSxmCjy.js";import"./ClearButton-B84EB4yf.js";import"./x-CL_KZXEW.js";import"./Button-BPjf-uHP.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BXoUii7t.js";import"./VisuallyHidden-DUGlWYSK.js";import"./FieldError-DUoT8eh2.js";import"./Text-BM8b8hjA.js";import"./Text-p3Ykg7gy.js";import"./RSPContexts-IuRmAr1v.js";import"./Collection-dzAraWz5.js";import"./index-DlfcjIIA.js";import"./DragAndDrop-CewPyPR9.js";import"./getScrollParent-vFXpP8ab.js";import"./scrollIntoView-qZ3V1AoT.js";import"./SelectionIndicator-Cpy4WKkL.js";import"./SelectionManager-BPXPWQd0.js";import"./useEvent-B67iovzO.js";import"./useDescription-BrEL6S7F.js";import"./inertValue-BN8JlSWQ.js";import"./useHighlightSelectionDescription-Bi4Zt79O.js";import"./useUpdateEffect-CvMRLD1v.js";import"./ListKeyboardDelegate-C6dnvuD-.js";import"./useHasTabbableChild-CUv6kpD-.js";import"./Checkbox-Cj-Drpav.js";import"./Form-DIHYsu0S.js";import"./check-D2ZpHC50.js";import"./useToggleState-BhRz2XTJ.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
