import{r as m,f as l,j as t}from"./iframe-Cnprf77l.js";import{S as d}from"./SearchField-BNZGgfFY.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C6-hr4lU.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BAknv1n_.js";import"./clsx-B-dksMZM.js";import"./Form-BO6ek__5.js";import"./useFocusRing-BbKkuYRW.js";import"./index-D131wgQu.js";import"./index-DinabbhG.js";import"./Input-DYN-lYP3.js";import"./Hidden-CtzSMGYR.js";import"./Button-C9qpCnHp.js";import"./useLabel-VHxyrYwA.js";import"./useLabels-D2bRDv09.js";import"./useButton-Dj6JkoG-.js";import"./FieldError-37LT6hKT.js";import"./Text-TETOR_cU.js";import"./clsx-Ciqy0D92.js";import"./Text-xSTWmp3z.js";import"./RSPContexts-Cw9ibUso.js";import"./Group-D_hcMCy8.js";import"./useControlledState-bPVMsSoD.js";import"./useLocalizedStringFormatter-BM9Op5Of.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Ciw4fb72.js";import"./useField-sgfdLoP0.js";import"./TextField.module-DdivwlC8.js";import"./search-1K2g8oHG.js";import"./createLucideIcon-BhAvpesv.js";import"./x-Bh_dZ6M0.js";import"./useLocalizedStringFormatter-TTFjkzUm.js";import"./Button-CSDIchjo.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-O1yJF_LA.js";import"./Collection-CHgzwYqU.js";import"./index-BQbG8Pt1.js";import"./DragAndDrop-DagQc71l.js";import"./getScrollParent-BJmogAva.js";import"./scrollIntoView-DxnzOPwB.js";import"./SelectionIndicator-pvk1bIyk.js";import"./SelectionManager-DSTJ9RjU.js";import"./useEvent-CbxKKYwp.js";import"./useDescription-1c_yFidr.js";import"./inertValue-BGIX0IG0.js";import"./useHighlightSelectionDescription-DgNxzLfi.js";import"./useUpdateEffect-BsAcsXmS.js";import"./ListKeyboardDelegate-nnGUV4TF.js";import"./useHasTabbableChild-ZkQqkw69.js";import"./Checkbox-BxdtSAI-.js";import"./check-Bkw_KF2J.js";import"./useToggleState-CAstmiCJ.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
