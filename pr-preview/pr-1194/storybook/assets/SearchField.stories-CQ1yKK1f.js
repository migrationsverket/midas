import{r as m,f as l,j as t}from"./iframe-O6mcP7w5.js";import{S as d}from"./SearchField-DR6wVRpl.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-NPxTelKx.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-msXr86i8.js";import"./clsx-B-dksMZM.js";import"./Form-DFAJxP4u.js";import"./useFocusRing-DFc_QmgH.js";import"./index-5zPEcam6.js";import"./index-DhMeVXuk.js";import"./Input-_9crkkgl.js";import"./Hidden-BulmN4hD.js";import"./Button-BzVOX2eA.js";import"./useLabel-mg3lGotN.js";import"./useLabels-CbW6k4sf.js";import"./useButton-B_n0RrdL.js";import"./FieldError-CxFm68nF.js";import"./Text-D-DusRzY.js";import"./clsx-Ciqy0D92.js";import"./Text-CWuBzebG.js";import"./RSPContexts-BOI8AU7_.js";import"./Group-BBuyh76W.js";import"./useControlledState-BRRn0qym.js";import"./useLocalizedStringFormatter-7LpUttql.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Q9vPHk4M.js";import"./useField-Cm9c8J8E.js";import"./TextField.module-DdivwlC8.js";import"./search-C7HPvsm3.js";import"./createLucideIcon-rh706yg9.js";import"./x-76M_aj2E.js";import"./useLocalizedStringFormatter-Bp0OJ5-n.js";import"./Button-I2L11CLA.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CVj_UoLV.js";import"./Collection-Dq87Sf6r.js";import"./index-xXeG0lh1.js";import"./DragAndDrop-L8ke_q1w.js";import"./getScrollParent-Ccg0N06N.js";import"./scrollIntoView-MyDz4t7d.js";import"./SelectionIndicator-DS87ewSZ.js";import"./SelectionManager-CeCDp6on.js";import"./useEvent-CVey6hCu.js";import"./useDescription-Brvp-X9_.js";import"./inertValue-BvxpvZre.js";import"./useHighlightSelectionDescription-Dw4rEQiZ.js";import"./useUpdateEffect-CVz4GZ-A.js";import"./ListKeyboardDelegate-D0ioaPo6.js";import"./useHasTabbableChild-Cn_8e5dS.js";import"./Checkbox-B1X25U7e.js";import"./check-DR3IAIDn.js";import"./useToggleState-a8DM34nB.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
