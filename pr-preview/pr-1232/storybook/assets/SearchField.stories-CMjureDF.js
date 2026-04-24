import{r as m,f as l,j as t}from"./iframe-u611P0T1.js";import{S as d}from"./SearchField-BgKDPWnJ.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-yhoU5LSq.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BdhmhbmB.js";import"./clsx-B-dksMZM.js";import"./Form-Ct-T4_sP.js";import"./useFocusRing-x1014Y4C.js";import"./index-DjGI_wvA.js";import"./index-bc3f0jR5.js";import"./Input-DNUxzppg.js";import"./Hidden-BwAa9Aqn.js";import"./Button-DHuMXkEV.js";import"./useLabel-UVmCtmUg.js";import"./useLabels-DdnJKdMx.js";import"./useButton-Ck0FEmlG.js";import"./FieldError-BUsLHsVx.js";import"./Text-C1ITd__M.js";import"./clsx-Ciqy0D92.js";import"./Text-BiFS0ps1.js";import"./RSPContexts-CHqXj6wS.js";import"./Group-CJpHDVfm.js";import"./useControlledState-C8WxcwQm.js";import"./useLocalizedStringFormatter-DfPMqepd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DuE_Lsr4.js";import"./useField-DM_n0gFB.js";import"./TextField.module-DdivwlC8.js";import"./search-DJdaXi48.js";import"./createLucideIcon-DZ-Vm0W7.js";import"./x-BKnl8vZI.js";import"./useLocalizedStringFormatter-B5u32oMj.js";import"./Button-D0hAEojt.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CPF-h8vx.js";import"./Collection-6utQT-aI.js";import"./index-CY3bk5JT.js";import"./DragAndDrop-BcIs4weL.js";import"./getScrollParent-Dr2tWDHe.js";import"./scrollIntoView-XJLuBOkU.js";import"./SelectionIndicator-yCd4h3zR.js";import"./SelectionManager-B545sqsy.js";import"./useEvent-NAjU2EOD.js";import"./useDescription-Dz-E1gaV.js";import"./inertValue-C_vx55qk.js";import"./useHighlightSelectionDescription-CvGxYJ3U.js";import"./useUpdateEffect-CAYFW-uc.js";import"./ListKeyboardDelegate-BSlu98Kz.js";import"./useHasTabbableChild-Bnt7GmfW.js";import"./Checkbox-BGSAv2zu.js";import"./check-CHtO750Y.js";import"./useToggleState-CZLXoowP.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
