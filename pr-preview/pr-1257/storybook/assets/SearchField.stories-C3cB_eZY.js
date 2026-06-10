import{r as m,f as l,j as t}from"./iframe-DKbnbcYA.js";import{S as d}from"./SearchField-B7T1nyQO.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BX8-JgTG.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-2X7WrewA.js";import"./clsx-B-dksMZM.js";import"./Form-CpYIQC_j.js";import"./useFocusRing-BgkQ1tOe.js";import"./index-lY0kbfn5.js";import"./index-B5M4WY2m.js";import"./Input-BSVfkpjz.js";import"./Hidden-DVrzkHs4.js";import"./Button-B9rMpOVw.js";import"./useLabel-BTu-VYKR.js";import"./useLabels-4lND4b_p.js";import"./useButton-Zx4CPHJq.js";import"./FieldError-BRRl8Jd8.js";import"./Text-2zkyeVit.js";import"./clsx-Ciqy0D92.js";import"./Text-8emuzLV6.js";import"./RSPContexts-m9rKlbSF.js";import"./Group-x9eLwqj7.js";import"./useControlledState-EM6fJcGZ.js";import"./useLocalizedStringFormatter-CpOP5_I5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C-4R5JUq.js";import"./useField-Dw29PnIv.js";import"./TextField.module-DdivwlC8.js";import"./search-ClmoINNh.js";import"./createLucideIcon-CRlO1Apy.js";import"./x-BxlX_nCp.js";import"./useLocalizedStringFormatter-CoGMLhd_.js";import"./Button-CxkBGpkE.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BcPnQgXd.js";import"./Collection-Bklm0P2k.js";import"./index-C-qqVET8.js";import"./DragAndDrop-DZSrz5Fa.js";import"./getScrollParent-PmVOkSW6.js";import"./scrollIntoView-CnVxFKeo.js";import"./SelectionIndicator-Bhd05IYQ.js";import"./SelectionManager-JkraDGws.js";import"./useEvent-DNJmfabJ.js";import"./useDescription-W2O0P_pV.js";import"./inertValue-BY-h0rAZ.js";import"./useHighlightSelectionDescription-B_KESgnD.js";import"./useUpdateEffect-DF1x8Ita.js";import"./ListKeyboardDelegate-C8JVTZZ4.js";import"./useHasTabbableChild-Cf56YkGl.js";import"./Checkbox-4h6I4E20.js";import"./check-BIqAtnUb.js";import"./useToggleState-Cx6hLopY.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
