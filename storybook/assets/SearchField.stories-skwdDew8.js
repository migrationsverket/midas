import{r as m,f as l,j as t}from"./iframe-Dl4LNfFt.js";import{S as d}from"./SearchField-CQZC19nM.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BjtavGXk.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-zoe11Nhs.js";import"./clsx-B-dksMZM.js";import"./Form-BW3kbuFu.js";import"./useFocusRing-DBInQ3ih.js";import"./index-B4dlJKhH.js";import"./index-DfhqQ-fy.js";import"./Input-DBRGGN3r.js";import"./Hidden-qMhe2ll1.js";import"./Button-1ORHN5ed.js";import"./useLabel-BMyaEN82.js";import"./useLabels-D1nLqhyh.js";import"./useButton-B3ilWFtn.js";import"./FieldError-D8UkVWbY.js";import"./Text-P-m_usmt.js";import"./clsx-Ciqy0D92.js";import"./Text-htVbAu9h.js";import"./RSPContexts-4lSoz9P-.js";import"./Group-Dbz0NB1G.js";import"./useControlledState-CyH9azIX.js";import"./useLocalizedStringFormatter-BfzJ7Wkp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ByuWxfp6.js";import"./useField-Bt07QuwG.js";import"./TextField.module-DdivwlC8.js";import"./search-ByvNKtKL.js";import"./createLucideIcon-1sQySh6M.js";import"./x-BosK2Sg6.js";import"./useLocalizedStringFormatter-BHmmo-Zt.js";import"./Button-CE6ptzle.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CI441pyr.js";import"./Collection-Bo8GIdVi.js";import"./index-CDp8Li4l.js";import"./DragAndDrop-Cs6Vxq5D.js";import"./getScrollParent-CRvNPk_3.js";import"./scrollIntoView-B7KTALk8.js";import"./SelectionIndicator-BOl6pKjd.js";import"./SelectionManager-Dd8kFD9H.js";import"./useEvent-BlUZThVq.js";import"./useDescription-ccYB2Tbm.js";import"./inertValue-Bwq7Qojv.js";import"./useHighlightSelectionDescription-DFJx1zXg.js";import"./useUpdateEffect-BtbLsE_r.js";import"./ListKeyboardDelegate-BwRHOVKV.js";import"./useHasTabbableChild-CL8GuM8h.js";import"./Checkbox-3nmmTNzm.js";import"./check-DbUEPk8b.js";import"./useToggleState-DrjK-n7i.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
