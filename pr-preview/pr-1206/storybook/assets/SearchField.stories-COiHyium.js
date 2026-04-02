import{r as m,f as l,j as t}from"./iframe-CPZ4_d2q.js";import{S as d}from"./SearchField-CXuGyElG.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BskAaNVs.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DWW_dCIy.js";import"./clsx-B-dksMZM.js";import"./Form-D49Ri7OX.js";import"./useFocusRing-d1kY_X2y.js";import"./index-BFKhD2nT.js";import"./index-DgF8N3uU.js";import"./Input-Du1VWq2r.js";import"./Hidden-ddHOLGj0.js";import"./Button-CXhapsAk.js";import"./useLabel-D74j4qSK.js";import"./useLabels-DBtqpm2S.js";import"./useButton-BXpF8VVF.js";import"./FieldError-rOuvG30X.js";import"./Text-C-nhapA_.js";import"./clsx-Ciqy0D92.js";import"./Text-CxhoFnBV.js";import"./RSPContexts-CNU_cvLJ.js";import"./Group-Abbeg9Sy.js";import"./useControlledState-DiN_YqvG.js";import"./useLocalizedStringFormatter-DLx3xcdn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DPTUmy2B.js";import"./useField-DjwAKZ9N.js";import"./TextField.module-DdivwlC8.js";import"./search-De_-Snl0.js";import"./createLucideIcon-CHHQY25e.js";import"./x-_8u0d44F.js";import"./useLocalizedStringFormatter-7dRGsYY4.js";import"./Button-hn_7_4-p.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D_2Qiydl.js";import"./Collection-Fsz5o6xJ.js";import"./index-DBpEcHx7.js";import"./DragAndDrop-Dlh9qUf-.js";import"./getScrollParent-B7yWW-nR.js";import"./scrollIntoView-DakIikjX.js";import"./SelectionIndicator-Chd1drg3.js";import"./SelectionManager-Tb8iyxQ5.js";import"./useEvent-Bz5nfpns.js";import"./useDescription-DY6oOuRz.js";import"./inertValue-B0pm__uB.js";import"./useHighlightSelectionDescription-io7gTwAQ.js";import"./useUpdateEffect-BrNCpMnQ.js";import"./ListKeyboardDelegate-BtHFCYxu.js";import"./useHasTabbableChild-jJKWv_0t.js";import"./Checkbox-3NqGxmjj.js";import"./check-Dx2V9mk7.js";import"./useToggleState-BgzLiZaz.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
