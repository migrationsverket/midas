import{r as m,f as l,j as t}from"./iframe-DHxMEyk6.js";import{S as d}from"./SearchField-CF8yZM77.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DxJHJyVu.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C_yGkqEQ.js";import"./clsx-B-dksMZM.js";import"./Form-BSJcOZpD.js";import"./useFocusRing-BkOUJVy3.js";import"./index-BsabDiUe.js";import"./index-D8JeEhpq.js";import"./Input-DpbKxiDC.js";import"./Hidden-CkZgcLGH.js";import"./Button-BpC7kCwC.js";import"./useLabel-BTR3XuI0.js";import"./useLabels-Yo5aFm_3.js";import"./useButton-Br-Hv-S3.js";import"./FieldError-C2Sc9U8m.js";import"./Text-C0s7dJ5a.js";import"./clsx-Ciqy0D92.js";import"./Text-CSs2JSPr.js";import"./RSPContexts-xSY5mLjc.js";import"./Group-BjRO1dfk.js";import"./useControlledState-DToB7jqX.js";import"./useLocalizedStringFormatter-DWzf9Q6R.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-RCL-8rD7.js";import"./useField-C7HbmUXj.js";import"./TextField.module-DdivwlC8.js";import"./search-uhQhncgQ.js";import"./createLucideIcon-uDhXojJY.js";import"./x-BasF0MYi.js";import"./useLocalizedStringFormatter-C4FoF24Q.js";import"./Button-DTaKScGa.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-oG0E9KZu.js";import"./Collection-BN9__hjp.js";import"./index-DG8_ZRly.js";import"./DragAndDrop-BVDcQHZ1.js";import"./getScrollParent-Cb_GBxXJ.js";import"./scrollIntoView-Cwf4WFKd.js";import"./SelectionIndicator-B1SEN247.js";import"./SelectionManager-zlWcTFKf.js";import"./useEvent-D9bVVAaY.js";import"./useDescription-BbVhVBC-.js";import"./inertValue-Dz_xx9hH.js";import"./useHighlightSelectionDescription-D3989Baq.js";import"./useUpdateEffect-D_qDzU80.js";import"./ListKeyboardDelegate-hIKANMJz.js";import"./useHasTabbableChild-C1-EpV9B.js";import"./Checkbox-Cz_vOQdI.js";import"./check-BXgeEnwI.js";import"./useToggleState-BqO_TA_t.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
