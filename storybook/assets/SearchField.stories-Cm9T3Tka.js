import{r as m,f as l,j as t}from"./iframe-BMeVz6y-.js";import{S as d}from"./SearchField-EVKxI4Kj.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CRjIvd5d.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Mz74w--R.js";import"./utils-gLrvz57I.js";import"./useLocalizedStringFormatter-B6BaJT_D.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CO-xMpuL.js";import"./useFocusRing-B3A74r94.js";import"./index-C78FzeUG.js";import"./index-DuQDy4Im.js";import"./useFormValidation-B6ysVh97.js";import"./useField-9rt5-gOQ.js";import"./Button-YuHrdvqU.js";import"./Hidden-BtcHHrEj.js";import"./useLabels-DU1760XI.js";import"./useButton-BfWVW3lI.js";import"./search-DGFCMCKR.js";import"./createLucideIcon-DWjVVpun.js";import"./ClearButton-ChXNGhMR.js";import"./Button-DkV7wLYz.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BThYc7xn.js";import"./VisuallyHidden-DGyUcRul.js";import"./x-Bqp_P532.js";import"./FieldError-B9b-doZT.js";import"./Text-BobX77Rp.js";import"./Text-D9ERza-j.js";import"./RSPContexts-CcyIB1J1.js";import"./Collection-Bheqxq41.js";import"./index-BPu_xHQW.js";import"./DragAndDrop-DqUMlSfR.js";import"./getScrollParent-olEr1uYA.js";import"./scrollIntoView-xPfDbdJG.js";import"./SelectionIndicator-Boxf7bWG.js";import"./SelectionManager-D27pdCve.js";import"./useEvent-BuIlv2vt.js";import"./useDescription-BIdxB60Q.js";import"./inertValue-C_RomDBI.js";import"./useHighlightSelectionDescription-vnfyoXp-.js";import"./useUpdateEffect-DG9dXB6l.js";import"./ListKeyboardDelegate-DGVlHrIu.js";import"./useHasTabbableChild-DykVdKKv.js";import"./Checkbox-ChkZnIHA.js";import"./Form-Bfg6c9lw.js";import"./check-CnxbIUgj.js";import"./useToggleState-B4RFCjFe.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
