import{r as m,f as l,j as t}from"./iframe-apXpK-Ym.js";import{S as d}from"./SearchField-DqoPfJnI.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DtduKTQ0.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Be_pRaEQ.js";import"./utils-D_IsDdxh.js";import"./useLocalizedStringFormatter-LKHWluuZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DvTY5e1I.js";import"./useFocusRing-DKK5dDPM.js";import"./index-DJoHNShF.js";import"./index-FrU2UnB4.js";import"./useFormValidation-CKfmowTq.js";import"./useField-iX3RzpJx.js";import"./Button-B7ztBAPt.js";import"./Hidden-Bx4MJY4P.js";import"./useLabels-C0ZZhp1J.js";import"./useButton-CEwHI7GR.js";import"./search-BmjRK_VN.js";import"./createLucideIcon-BVTX869z.js";import"./ClearButton-Bac7l5jn.js";import"./Button-B3oZe3e3.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-RrN5kh6g.js";import"./VisuallyHidden-DkYm7gZi.js";import"./x-CdTIprco.js";import"./FieldError-D5-eAkFz.js";import"./Text-C8sRdSzE.js";import"./Text-i6zD5ogA.js";import"./RSPContexts-faUp0Odp.js";import"./Collection-D3gx8QV5.js";import"./index-Dgx-sPIC.js";import"./DragAndDrop-IWn51-jG.js";import"./getScrollParent-KYVriqsz.js";import"./scrollIntoView-CTB_aNM2.js";import"./SelectionIndicator-DWN5x0c4.js";import"./SelectionManager-ClJLzM8L.js";import"./useEvent-Cb7uf1PC.js";import"./useDescription-WAW3EvIG.js";import"./inertValue-UCgsPsNJ.js";import"./useHighlightSelectionDescription-BhR6guN7.js";import"./useUpdateEffect-CBOcqnz5.js";import"./ListKeyboardDelegate-aRoWOpht.js";import"./useHasTabbableChild-Bnppbthm.js";import"./Checkbox-D9nJSxUU.js";import"./Form-CrNVZ_qL.js";import"./check-DdPjn7Ny.js";import"./useToggleState-BOfWrg06.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
