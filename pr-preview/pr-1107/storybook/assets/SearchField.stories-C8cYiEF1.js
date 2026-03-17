import{r as m,f as l,j as t}from"./iframe-Bf1Ah5rB.js";import{S as d}from"./SearchField-tG7sKO1V.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B6f4-jue.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C7EdL_Lb.js";import"./utils-DXJEO7_N.js";import"./useLocalizedStringFormatter-tsrFn-Jf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ZWCNtOR-.js";import"./useFocusRing-DSdU7aAS.js";import"./index-Dbyil8jF.js";import"./index-CF1c_2Pb.js";import"./useFormValidation-ywlfRHkn.js";import"./useField-DVUjy4Hh.js";import"./Button-CnYQaxyi.js";import"./Hidden-Cbiq0OqP.js";import"./useLabels-B4_UAfBy.js";import"./useButton-DSIJ1kYo.js";import"./search-CMqFc6xX.js";import"./createLucideIcon-upfVu1an.js";import"./ClearButton-Dz2vOPmE.js";import"./x-DLmn2Tbc.js";import"./Button-BY8ZqICl.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-8eSi0SDt.js";import"./VisuallyHidden-CeYEhVtC.js";import"./FieldError-BasXWSrV.js";import"./Text-BHf7sfPg.js";import"./Text-DhXeS_DS.js";import"./RSPContexts-kOrZQZ_t.js";import"./Collection-CeaFj-zL.js";import"./index-BkrJk2hY.js";import"./DragAndDrop-Dt6oUnji.js";import"./getScrollParent-BUiYsgTc.js";import"./scrollIntoView-GI-dTWRJ.js";import"./SelectionIndicator-CnH_HEy_.js";import"./SelectionManager-CfAasErd.js";import"./useEvent-BxaPwLOP.js";import"./useDescription-CpnzDPEn.js";import"./inertValue-BXkYooTw.js";import"./useHighlightSelectionDescription-CVJWIPdK.js";import"./useUpdateEffect-BNFWBf9O.js";import"./ListKeyboardDelegate-57vVEhHE.js";import"./useHasTabbableChild-CzCsP3_x.js";import"./Checkbox-CSWwkHvQ.js";import"./Form-CPG4PSsf.js";import"./check-3Y8y5_8o.js";import"./useToggleState-Bxlueg7g.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
