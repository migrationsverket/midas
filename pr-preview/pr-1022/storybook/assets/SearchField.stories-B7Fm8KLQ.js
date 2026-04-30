import{r as m,f as l,j as t}from"./iframe-Bs-4Q0RS.js";import{S as d}from"./SearchField-BM2ZhabX.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DaD1fcqA.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D6H3fjwf.js";import"./clsx-B-dksMZM.js";import"./Form-Blxuo4OH.js";import"./useFocusRing-BPypZ_tc.js";import"./index-6uY4yepA.js";import"./index-BgNIyxhc.js";import"./Input-DXT5PACK.js";import"./Hidden-DC5u3Uje.js";import"./Button-BRycn86x.js";import"./useLabel-BMAVjmg6.js";import"./useLabels-BCny178P.js";import"./useButton-Cy54odSV.js";import"./FieldError-B2Y4IZts.js";import"./Text-DUhY8chK.js";import"./clsx-Ciqy0D92.js";import"./Text-CODpWWcU.js";import"./RSPContexts-B9ePokfA.js";import"./Group-BGL_FGSG.js";import"./useControlledState-DOA-W8fE.js";import"./useLocalizedStringFormatter-BiyFB0Ck.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DiHi25f0.js";import"./useField-Y_v01lD_.js";import"./TextField.module-DdivwlC8.js";import"./search-CngbP3Nb.js";import"./createLucideIcon-C-ocypBz.js";import"./x-DCsDOoGU.js";import"./useLocalizedStringFormatter-aDoo-4ef.js";import"./Button-DTSBAwbm.js";import"./Button.module-BFenTVPP.js";import"./VisuallyHidden-D2ZFd25y.js";import"./Collection-Dq8lZjSa.js";import"./index-D7PC-cg1.js";import"./DragAndDrop-naV4_vna.js";import"./getScrollParent-DKOj2UCK.js";import"./scrollIntoView-Dyrx4XX-.js";import"./SelectionIndicator-CJFP_0sY.js";import"./SelectionManager-P9mBPQZb.js";import"./useEvent-DlRuF4SX.js";import"./useDescription-uNFQQz6p.js";import"./inertValue-BCKUU-m4.js";import"./useHighlightSelectionDescription-BeaCXjxF.js";import"./useUpdateEffect-CCsFjj4V.js";import"./ListKeyboardDelegate-Ts7Qfl9m.js";import"./useHasTabbableChild-hB4u9_0o.js";import"./Checkbox-DM3pRUaa.js";import"./check-BJXAq9IQ.js";import"./useToggleState-EA3i6Z2-.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
