import{r as m,f as l,j as t}from"./iframe-CNCYpet-.js";import{S as d}from"./SearchField-DD3j9o6I.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-zjOuj6IQ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DbCir_Jt.js";import"./clsx-B-dksMZM.js";import"./Form-BY3Nnasj.js";import"./useFocusRing-CRxTmkRw.js";import"./index-BUDe2ZxC.js";import"./index-DWOJOWmI.js";import"./Input-CLzu89d7.js";import"./Hidden-hGcy4cT5.js";import"./Button-DJ63q7tI.js";import"./useLabel-CzS_jyTD.js";import"./useLabels-vAecHqWn.js";import"./useButton-DXHtHs2n.js";import"./FieldError-pGosIpkp.js";import"./Text-BSDJ27Oc.js";import"./clsx-Ciqy0D92.js";import"./Text-ORzvfqKL.js";import"./RSPContexts-BaURGsym.js";import"./Group-DFj-8_7F.js";import"./useControlledState-CeXWXac4.js";import"./useLocalizedStringFormatter-D4gZ00xG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CH01Fcwe.js";import"./useField-CS2Ek9vr.js";import"./TextField.module-DdivwlC8.js";import"./search-C4Ip_36Y.js";import"./createLucideIcon-Clh8USVg.js";import"./x-BNWluiEV.js";import"./useLocalizedStringFormatter-BnKVjVFL.js";import"./Button-FEtIFAuh.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BD8822Hp.js";import"./Collection-fvaKWVec.js";import"./index-wiJ-pny3.js";import"./DragAndDrop-BDsXIb2M.js";import"./getScrollParent-C5eE57Do.js";import"./scrollIntoView-DKoFSOfZ.js";import"./SelectionIndicator-By9ghNhJ.js";import"./SelectionManager-Dsrgsk_Q.js";import"./useEvent-SGyVQ3yM.js";import"./useDescription-CgiS5IZ6.js";import"./inertValue-3J7z9usL.js";import"./useHighlightSelectionDescription-Dx-eYTJ4.js";import"./useUpdateEffect-CWxL_VN5.js";import"./ListKeyboardDelegate-BT-CoH93.js";import"./useHasTabbableChild-06aPGh_S.js";import"./Checkbox-BL1GjiM4.js";import"./check-COyRFE5A.js";import"./useToggleState-WsKbSdAi.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
