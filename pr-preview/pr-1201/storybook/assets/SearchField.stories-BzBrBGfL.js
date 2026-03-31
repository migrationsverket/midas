import{r as m,f as l,j as t}from"./iframe-CXDxfhKB.js";import{S as d}from"./SearchField-D0HtSyXm.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Zb6O_HTQ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BlE_s_bB.js";import"./clsx-B-dksMZM.js";import"./Form-Dq6C18ap.js";import"./useFocusRing-V1VB5dDl.js";import"./index-C3fyWD75.js";import"./index-0GWGer8Z.js";import"./Input-DmvSStnV.js";import"./Hidden-DFs8xn-0.js";import"./Button-rApmyro7.js";import"./useLabel-BQWuOrga.js";import"./useLabels-CzD1PIZv.js";import"./useButton-CHfNFaSS.js";import"./FieldError-CRkZofSG.js";import"./Text-w7WBT89W.js";import"./clsx-Ciqy0D92.js";import"./Text-NatKauD4.js";import"./RSPContexts-Nbqg0I0B.js";import"./Group--G8Z4Ct_.js";import"./useControlledState-C3yTnT2d.js";import"./useLocalizedStringFormatter-DFZeYHJD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BuP-1XG_.js";import"./useField-ljYOypBN.js";import"./TextField.module-DdivwlC8.js";import"./search-C7Y62kHL.js";import"./createLucideIcon-DfHQJbWK.js";import"./x-8JNHbqX6.js";import"./useLocalizedStringFormatter-BSYNBMcv.js";import"./Button-BZAdL-F6.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D1jOK9_R.js";import"./Collection-C03GyHMY.js";import"./index-B283YcJ4.js";import"./DragAndDrop-k5ATzQeP.js";import"./getScrollParent-DpF68pAX.js";import"./scrollIntoView-CrmCmhFj.js";import"./SelectionIndicator-BeTSBWNA.js";import"./SelectionManager-Dej9q5IQ.js";import"./useEvent-BMdy9ETw.js";import"./useDescription-DvZUghvu.js";import"./inertValue-CbV0-am6.js";import"./useHighlightSelectionDescription-wGmy995V.js";import"./useUpdateEffect-B4Pyk6px.js";import"./ListKeyboardDelegate-U_DFw0WQ.js";import"./useHasTabbableChild-n7SCbu0f.js";import"./Checkbox-C201Sb3D.js";import"./check-BMZcnX9v.js";import"./useToggleState-BvpiVkSe.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
