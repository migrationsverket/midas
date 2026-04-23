import{r as m,f as l,j as t}from"./iframe-CcS9-zHY.js";import{S as d}from"./SearchField-CT40X37V.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BfGb4Ymr.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BpPVMEC-.js";import"./clsx-B-dksMZM.js";import"./Form-B4Em8h3U.js";import"./useFocusRing-DtQX9EVQ.js";import"./index-B__opsAk.js";import"./index-CTyP7lmf.js";import"./Input-Dr_jNhta.js";import"./Hidden-C5RVHIuY.js";import"./Button-CP1lY-X_.js";import"./useLabel-CjpuKoQa.js";import"./useLabels-CEXOtBfV.js";import"./useButton-D8FkW36h.js";import"./FieldError-CbsUmaqP.js";import"./Text-Bk3CxDKX.js";import"./clsx-Ciqy0D92.js";import"./Text-BzFZDvz7.js";import"./RSPContexts-CbDTmKmT.js";import"./Group-DNVF67sa.js";import"./useControlledState-BouQOm1H.js";import"./useLocalizedStringFormatter-CayNuj83.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BOrC1Htv.js";import"./useField-B-LqTpNQ.js";import"./TextField.module-DdivwlC8.js";import"./search-BanY5Jc-.js";import"./createLucideIcon-C0GJ5EwW.js";import"./x-I-qa-SpT.js";import"./useLocalizedStringFormatter-CK-X1ruo.js";import"./Button-D2itB7Px.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-hYYm2jyD.js";import"./Collection-B8BWG8uC.js";import"./index-BeFzaQ2_.js";import"./DragAndDrop-CbyMMQ54.js";import"./getScrollParent-C09F78IA.js";import"./scrollIntoView-xMmmrx8y.js";import"./SelectionIndicator-XmQFTl1h.js";import"./SelectionManager-B0z2jKGv.js";import"./useEvent-BvvSzZ47.js";import"./useDescription-BvrFOMAt.js";import"./inertValue-BfIkCa4i.js";import"./useHighlightSelectionDescription-DdsxyYSl.js";import"./useUpdateEffect-DpM_SBJU.js";import"./ListKeyboardDelegate-BKbak_DI.js";import"./useHasTabbableChild-DIdLR2iF.js";import"./Checkbox-BwT4xHY7.js";import"./check-C73J9HTj.js";import"./useToggleState-DCFGrPdd.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
