import{r as m,f as l,j as t}from"./iframe-C2Yyxb_o.js";import{S as d}from"./SearchField-DXCrcDjH.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DC2Psb2x.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cdg6EvLr.js";import"./utils-WFtffLiW.js";import"./useLocalizedStringFormatter-BR3z1GcU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-dCbEBezK.js";import"./useFocusRing-nMTXWlTy.js";import"./index-DNvvTP-Y.js";import"./index-DURILlkI.js";import"./useFormValidation-C7BWwups.js";import"./useField-_oAE-yI6.js";import"./Button-BIrUuJFL.js";import"./Hidden-DgX5eHvD.js";import"./useLabels-BZQhvLB1.js";import"./useButton-COo6uvE9.js";import"./search-yRcRnnJw.js";import"./createLucideIcon-CfyIEXzg.js";import"./ClearButton-BhszuIxa.js";import"./x-DfcaNs2P.js";import"./Button-BQqfifzb.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Cbipm8_N.js";import"./VisuallyHidden-B7F_lxL0.js";import"./FieldError-C6hW-3rq.js";import"./Text-Dt7S0YjD.js";import"./Text-CeM-jeK1.js";import"./RSPContexts-2VRlgjKK.js";import"./Collection-CRznF4DQ.js";import"./index-SCf2pMTj.js";import"./DragAndDrop-CrOGdbc2.js";import"./getScrollParent-BkBLu-wI.js";import"./scrollIntoView-CyGcDExg.js";import"./SelectionIndicator-TGObzo75.js";import"./SelectionManager-Bj0gjutB.js";import"./useEvent-DX2tR9aV.js";import"./useDescription-BVRp3o_m.js";import"./inertValue-9yenkhji.js";import"./useHighlightSelectionDescription-DyhhRz2m.js";import"./useUpdateEffect-DFdE-Uuv.js";import"./ListKeyboardDelegate-CIhBGTnQ.js";import"./useHasTabbableChild-BmNg7EzH.js";import"./Checkbox-BcvjsE0H.js";import"./Form-CyxWrLxN.js";import"./check-DaB1OjsN.js";import"./useToggleState-2QLi4EFT.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
