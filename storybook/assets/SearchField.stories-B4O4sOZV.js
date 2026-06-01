import{r as m,f as l,j as t}from"./iframe-Dnz7kUlg.js";import{S as d}from"./SearchField-BokaxkIv.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Bdz1NBm2.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CAf_-pht.js";import"./clsx-B-dksMZM.js";import"./Form-W54koQxt.js";import"./useFocusRing-Dzszu2Vy.js";import"./index-PhUC-dOo.js";import"./index-7KV9d02y.js";import"./Input-C2nOYIfl.js";import"./Hidden-kcU4Hzb8.js";import"./Button-C6iHgC9P.js";import"./useLabel-BUdrG9lA.js";import"./useLabels-YSILxijJ.js";import"./useButton-C3WMTaS3.js";import"./FieldError-BH1ucUfl.js";import"./Text-B5WBJ4QI.js";import"./clsx-Ciqy0D92.js";import"./Text-CtOjX911.js";import"./RSPContexts-Cp-T_kgY.js";import"./Group-DG0Y1mio.js";import"./useControlledState-Iqz0lmAp.js";import"./useLocalizedStringFormatter-DwxYp_RG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-G04DdbQ9.js";import"./useField-DK5iQm1y.js";import"./TextField.module-DdivwlC8.js";import"./search-BfsmH-4w.js";import"./createLucideIcon-C7dFuUAn.js";import"./x-68yJIKBo.js";import"./useLocalizedStringFormatter-1LNK4MxE.js";import"./Button-DP2JC875.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Dm7meOkg.js";import"./Collection-CZKBbkK9.js";import"./index-ju8lx5jh.js";import"./DragAndDrop-Mj_ctjjP.js";import"./getScrollParent-CEScWKZW.js";import"./scrollIntoView-DTF-X5Bx.js";import"./SelectionIndicator-Cf1Yj1qg.js";import"./SelectionManager-CGlOn_QU.js";import"./useEvent-C9zHHyc9.js";import"./useDescription-BWq2pUsi.js";import"./inertValue-DM6_m64U.js";import"./useHighlightSelectionDescription-DlOiJhj_.js";import"./useUpdateEffect-BQu6ZFqv.js";import"./ListKeyboardDelegate-B5Qqhejy.js";import"./useHasTabbableChild-CYb-389S.js";import"./Checkbox-Cdayt3bw.js";import"./check-COv7Z62F.js";import"./useToggleState-d84q-EgA.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
