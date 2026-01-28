import{r as m,f as l,j as t}from"./iframe-Dw6ThTAb.js";import{S as d}from"./SearchField-D4k-tuEY.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CLGCFRUh.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CUSHFPNB.js";import"./utils-Cc21G09W.js";import"./useLocalizedStringFormatter-BY0kdCm4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BsccNDKb.js";import"./useFocusRing-xc1II4Ss.js";import"./index-CYKqCDi7.js";import"./index-MEMx4wU2.js";import"./useFormValidation-CRMkN8GB.js";import"./useField-VxKjSK4Y.js";import"./Button-0Xunpr60.js";import"./Hidden-SnJFNY5a.js";import"./useLabels-DkWQHrpu.js";import"./useButton-Au9jFQG2.js";import"./search-aQDuiQBz.js";import"./createLucideIcon-B3ctXaYi.js";import"./ClearButton-Dxknv4Gc.js";import"./Button-B1ILUDpZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-n073QgDi.js";import"./VisuallyHidden-CdWjTb8h.js";import"./x-B_wX4fA-.js";import"./FieldError-DXxOP3rc.js";import"./Text-CUe8uG9W.js";import"./Text-COf0hmuO.js";import"./RSPContexts-tvXcEv4V.js";import"./Collection-BBo2i_f0.js";import"./index-BOINZ4le.js";import"./DragAndDrop-Cw_rPWYa.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DKG-qAuu.js";import"./SelectionManager-DkglZCtx.js";import"./useEvent-DasM2UJj.js";import"./useDescription-D06z1dS-.js";import"./inertValue-BUpgdybD.js";import"./useHighlightSelectionDescription-CrvDBKvA.js";import"./useUpdateEffect-MG618h7c.js";import"./ListKeyboardDelegate-BP400_Lu.js";import"./useHasTabbableChild-C6tOEHqj.js";import"./Checkbox-BtPrFU3S.js";import"./Form-XKsvFydX.js";import"./check-BCXwpl9Y.js";import"./useToggleState-Dx8W6wIq.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
