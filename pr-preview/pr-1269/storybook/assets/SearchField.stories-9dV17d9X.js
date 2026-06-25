import{r as m,f as l,j as t}from"./iframe-zmdm5LWO.js";import{S as d}from"./SearchField-ChA4Xc4R.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BKnUbqMt.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BVXhqey2.js";import"./clsx-B-dksMZM.js";import"./Form-B9squnXu.js";import"./useFocusRing-ChdwpxNy.js";import"./index-CR9Wusv4.js";import"./index-BM2_5E3m.js";import"./Input-C28jpw0n.js";import"./Hidden-Da0JYuUZ.js";import"./Button-CJHqtIe5.js";import"./useLabel-Di2CB_YG.js";import"./useLabels-Co4DVdbJ.js";import"./useButton-BIbblWcf.js";import"./FieldError-CnGNBTtl.js";import"./Text-C_A67KfE.js";import"./clsx-Ciqy0D92.js";import"./Text-BlbFrX8Z.js";import"./RSPContexts-CkA1USMd.js";import"./Group-BfrZXSfh.js";import"./useControlledState-CPsjL82m.js";import"./useLocalizedStringFormatter-LEYk1ZVN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DFZmybEF.js";import"./useField-TGoSKSzA.js";import"./TextField.module-DdivwlC8.js";import"./search-BKepAVKR.js";import"./createLucideIcon-BWu7CyXu.js";import"./x-XVyRqWEu.js";import"./useLocalizedStringFormatter-Crt7pDpL.js";import"./Button-BYmNnQBF.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DeZC0Ok1.js";import"./Collection-B_xTn3lN.js";import"./index-D_c3Fzu0.js";import"./DragAndDrop-uF9CPU3C.js";import"./getScrollParent-YKNs88UL.js";import"./scrollIntoView-QLDgtXAW.js";import"./SelectionIndicator-32SJlHNX.js";import"./SelectionManager-wVErokbN.js";import"./useEvent-xez8_YkI.js";import"./useDescription-rHa26S1A.js";import"./inertValue-WPNTVLgN.js";import"./useHighlightSelectionDescription-BrCZJpfi.js";import"./useUpdateEffect-L__8C6WG.js";import"./ListKeyboardDelegate-CRUYtTHH.js";import"./useHasTabbableChild-Dwow-zm0.js";import"./Checkbox-lU6_6t15.js";import"./check-DIRwVHcA.js";import"./useToggleState-D8972mtX.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
