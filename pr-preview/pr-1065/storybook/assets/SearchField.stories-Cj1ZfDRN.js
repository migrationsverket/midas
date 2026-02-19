import{r as m,f as l,j as t}from"./iframe-CD9uBJjF.js";import{S as d}from"./SearchField-BCIAlPPP.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-04GzVXuE.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DBQiRr7K.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CV5SZqjM.js";import"./utils-D9nWysEF.js";import"./useLocalizedStringFormatter-BfgeHIhn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-SKPHel1c.js";import"./useFocusRing-Bz4Ez0NQ.js";import"./index-CyAc0wfu.js";import"./index-Cfa7UGYo.js";import"./useFormValidation-CMWTaPvT.js";import"./useField-NtKOYEUw.js";import"./Button-DKA4ukB1.js";import"./Hidden-MQKal_Xr.js";import"./useLabels-REhQlgaO.js";import"./useButton-C2BwIN52.js";import"./search-Bg0cwN17.js";import"./createLucideIcon-ukt1IiZL.js";import"./ClearButton-CClLmPlR.js";import"./Button-BuKqwfs3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B8TYdvpB.js";import"./VisuallyHidden-Csfns3eW.js";import"./x-OCy2nfas.js";import"./FieldError-BlUbkslV.js";import"./Text-gTqq02dR.js";import"./Text-DrZkRnZ9.js";import"./RSPContexts-gGDWzVAk.js";import"./Collection-BIApEFUw.js";import"./index-0-MnvgDy.js";import"./DragAndDrop-CanBnAMu.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CAycTYPK.js";import"./SelectionManager-CRVyVoV9.js";import"./useEvent-DI0CpNHe.js";import"./useDescription-CHLccClC.js";import"./inertValue-Bylu4-bx.js";import"./useHighlightSelectionDescription-0rULF-wU.js";import"./useUpdateEffect-DgglsxYi.js";import"./ListKeyboardDelegate-DsaZyf27.js";import"./useHasTabbableChild-zg4fmDhf.js";import"./Checkbox-DJwFiVG_.js";import"./Form-BgJ1n07C.js";import"./check-CbMRRhXp.js";import"./useToggleState-DD2arsE3.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
