import{r as m,f as l,j as t}from"./iframe-CTc60VTv.js";import{S as d}from"./SearchField-DDR7Q0Io.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-58l2GY_k.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CX_MyPJp.js";import"./clsx-B-dksMZM.js";import"./Form-D62ZHhda.js";import"./useFocusRing-DGMfhUR8.js";import"./index-CopPqlir.js";import"./index-B5EHLrG2.js";import"./Input-DsNWiE5X.js";import"./Hidden-Bn2RbpW0.js";import"./Button-pB47d38A.js";import"./useLabels-DSU9QQ05.js";import"./useButton-BcQwxG2_.js";import"./FieldError-DLICbn0F.js";import"./Text-BWm8EFxq.js";import"./clsx-Ciqy0D92.js";import"./Text-U4cmy44W.js";import"./RSPContexts-DfNYkHSv.js";import"./Group-Cxt1AVrf.js";import"./useControlledState-D-bgWf48.js";import"./useLocalizedStringFormatter-B9U1Drd-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ccJ8AYql.js";import"./useField-DhnrRXLH.js";import"./TextField.module-DdivwlC8.js";import"./search-Dzfl59s-.js";import"./createLucideIcon-C63opgfS.js";import"./x-B_Vqy6_g.js";import"./useLocalizedStringFormatter-Ci3kGB7o.js";import"./Button-BjBl_qxz.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-SblkdzTe.js";import"./Collection-DAGgpsDY.js";import"./index-B5bk7jfZ.js";import"./DragAndDrop-AWxyTlmz.js";import"./getScrollParent-DlGzH9JS.js";import"./scrollIntoView-FnEgfIWQ.js";import"./SelectionIndicator-CAHQmEAu.js";import"./SelectionManager-nnkpkyRI.js";import"./useEvent-rHHxS9Wo.js";import"./useDescription-DgVzXBhb.js";import"./inertValue-DiIWPqLL.js";import"./useHighlightSelectionDescription-8eaeskQk.js";import"./useUpdateEffect-Bi5pD-iR.js";import"./ListKeyboardDelegate-DByJPBwI.js";import"./useHasTabbableChild-CWu-M-eG.js";import"./Checkbox-CBSz7aL3.js";import"./check-C5dNhDB8.js";import"./useToggleState-CXExu_v9.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
