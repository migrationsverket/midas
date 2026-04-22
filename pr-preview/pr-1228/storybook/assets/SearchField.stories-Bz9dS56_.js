import{r as m,f as l,j as t}from"./iframe-D0FqK1lb.js";import{S as d}from"./SearchField-B4FbssXI.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CUGmPOvK.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BMbNOyUc.js";import"./clsx-B-dksMZM.js";import"./Form-B4kYCfIB.js";import"./useFocusRing-BD1a5Y2G.js";import"./index-5HzkHfPe.js";import"./index-SIDrXvAb.js";import"./Input-mDw74LWW.js";import"./Hidden-Dhm_4TsG.js";import"./Button-ASP2neQz.js";import"./useLabel-ky8NeYeA.js";import"./useLabels-Dak2com7.js";import"./useButton-pK_0UtxK.js";import"./FieldError-D9qv9kV0.js";import"./Text-Du7gyEcw.js";import"./clsx-Ciqy0D92.js";import"./Text-DNU35Fvp.js";import"./RSPContexts-0TxVVo6E.js";import"./Group-C-ROvPDj.js";import"./useControlledState-C8lWssw-.js";import"./useLocalizedStringFormatter-BHS8kRNf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-UlbAGD_U.js";import"./useField-j5hIvejQ.js";import"./TextField.module-DdivwlC8.js";import"./search-YmKaP_05.js";import"./createLucideIcon-B3FFrp2k.js";import"./x-CjuTORk7.js";import"./useLocalizedStringFormatter-CgfN0QE1.js";import"./Button-BmBlwCLs.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CFNdR6Qu.js";import"./Collection-BqqxDhK2.js";import"./index-DHQ1v_AI.js";import"./DragAndDrop-k0HA5Ozm.js";import"./getScrollParent-CbuB2ebi.js";import"./scrollIntoView-DLJFvk8W.js";import"./SelectionIndicator-Brnu1DGI.js";import"./SelectionManager-CgUlY-2r.js";import"./useEvent-B8pAJ79A.js";import"./useDescription-Df9gIiPP.js";import"./inertValue-BdTHG481.js";import"./useHighlightSelectionDescription-2q_Z90bm.js";import"./useUpdateEffect-C47vblp-.js";import"./ListKeyboardDelegate-C1t568NK.js";import"./useHasTabbableChild-BhNmSRYm.js";import"./Checkbox-Dob_Iq_G.js";import"./check-DFs_JDr_.js";import"./useToggleState-D2b6O0wH.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
