import{r as m,f as l,j as t}from"./iframe-QCvgx_6y.js";import{S as d}from"./SearchField-BucxofXw.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DZP8DEX4.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DePuPBqi.js";import"./utils-C1Mk8uEB.js";import"./useLocalizedStringFormatter-uw_CdbjJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-duDZLEnu.js";import"./useFocusRing-B0xXDhD6.js";import"./index-B-XgGbbB.js";import"./index-DWf5Hj5q.js";import"./useFormValidation-C1cEITOq.js";import"./useField-CbKewwmP.js";import"./Button-BpIMXVxv.js";import"./Hidden-DMidg2Il.js";import"./useLabels-BOXfhA_k.js";import"./useButton-Ciq0-AOg.js";import"./search-GDcZgC60.js";import"./createLucideIcon-CpnVUy3d.js";import"./ClearButton-2ON-ltvV.js";import"./Button-ttDsw6E6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-OgryoDOo.js";import"./VisuallyHidden-stmDuLKZ.js";import"./x-36BuEWll.js";import"./FieldError-8Gyb2PkQ.js";import"./Text-BvPJ8hQK.js";import"./Text-DMQOF3Hl.js";import"./RSPContexts-DXnSMn-5.js";import"./Collection-C0k5FBtb.js";import"./index-Bvu9lRJ-.js";import"./DragAndDrop-tDODiA6_.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DnuZvxPK.js";import"./SelectionManager-zHjCt-B6.js";import"./useEvent-Cxfz3n5z.js";import"./useDescription-Cvonpwl1.js";import"./inertValue-CTOiNDOP.js";import"./useHighlightSelectionDescription-B4r42f8s.js";import"./useUpdateEffect-BI9jQu1K.js";import"./ListKeyboardDelegate-BNBe2yba.js";import"./useHasTabbableChild-bXJ5y0cn.js";import"./Checkbox-BJMMBcw3.js";import"./Form-IEYrlIsD.js";import"./check-GLCaymJB.js";import"./useToggleState-DpwcKeWW.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
