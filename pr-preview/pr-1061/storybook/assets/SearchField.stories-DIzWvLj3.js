import{r as m,f as l,j as t}from"./iframe-PN707gYe.js";import{S as d}from"./SearchField-DwRRUjmJ.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-IrBPaojj.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-i6i54Khk.js";import"./utils-BfTV9i6h.js";import"./useLocalizedStringFormatter-CwDyz_8k.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BJcyerr9.js";import"./useFocusRing-zDf2sWnR.js";import"./index-ecqOFxv8.js";import"./index-2RsljFiJ.js";import"./useFormValidation-joHmUQOI.js";import"./useField-CE5dFQKQ.js";import"./Button-DWVM9qi7.js";import"./Hidden-CDS304l1.js";import"./useLabels-BzSl-k1d.js";import"./useButton-Cx8Tw01D.js";import"./search-Dbs2cgR2.js";import"./createLucideIcon-BSnI4rQ0.js";import"./ClearButton-CuZSG6bG.js";import"./Button-2ve-agNS.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DhPVws9w.js";import"./VisuallyHidden-BDvY-Erb.js";import"./x-C7LyQ1nR.js";import"./FieldError-C-jlNPwu.js";import"./Text-Dv_zo2E3.js";import"./Text-Dwlf9er-.js";import"./RSPContexts-CFSlWKUW.js";import"./Collection-DLFMKLxI.js";import"./index-Ch04P57V.js";import"./DragAndDrop-EtRWln-t.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B1_lBUMe.js";import"./SelectionManager-NiOyR-Xw.js";import"./useEvent-C1yj769m.js";import"./useDescription-BG2p2wOz.js";import"./inertValue-DU1TxBqZ.js";import"./useHighlightSelectionDescription-HyZ-V_cW.js";import"./useUpdateEffect-B0SKejvL.js";import"./ListKeyboardDelegate-ChFw6tO5.js";import"./useHasTabbableChild-DgxSybnx.js";import"./Checkbox-DDZz-EP6.js";import"./Form-CceAq0SA.js";import"./check-B3rU_jgj.js";import"./useToggleState-3a7kQ4OL.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
