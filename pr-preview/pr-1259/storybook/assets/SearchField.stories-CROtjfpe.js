import{r as m,f as l,j as t}from"./iframe-BtoRqfbN.js";import{S as d}from"./SearchField-Bn-O-Bmj.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-fCGP-qCq.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D3T2l2Oh.js";import"./clsx-B-dksMZM.js";import"./Form-TovplDMB.js";import"./useFocusRing-CPJmXdz2.js";import"./index-CLPTlYyH.js";import"./index-Wh2LXb7r.js";import"./Input-D3aAlazw.js";import"./Hidden-DmNqBwSB.js";import"./Button-D0NLyYor.js";import"./useLabel-BusboG5C.js";import"./useLabels-DkCdbV7o.js";import"./useButton-CAXNDaeV.js";import"./FieldError-B4waYEQL.js";import"./Text-x1siHFmD.js";import"./clsx-Ciqy0D92.js";import"./Text-UZHsyA5K.js";import"./RSPContexts-DkTToRLK.js";import"./Group-DGWr_ank.js";import"./useControlledState-acke6wY8.js";import"./useLocalizedStringFormatter-CoozzIhe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Opkbo0Gs.js";import"./useField-BmyqTXhe.js";import"./TextField.module-DdivwlC8.js";import"./search-BqX9KrwL.js";import"./createLucideIcon-BGwZIy7f.js";import"./x-DBRu_Ryo.js";import"./useLocalizedStringFormatter-BRT64aav.js";import"./Button-Dz0YcLF0.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DH8wexDg.js";import"./Collection-BxhFXTj7.js";import"./index-VivUuEmv.js";import"./DragAndDrop-BXmbPX2l.js";import"./getScrollParent-D4tvg9G7.js";import"./scrollIntoView-DKC0Wlwj.js";import"./SelectionIndicator-DN-f_s8Q.js";import"./SelectionManager-BhME_TyD.js";import"./useEvent-DfABwBS6.js";import"./useDescription-Dme_kk-C.js";import"./inertValue-CR-_CkZ4.js";import"./useHighlightSelectionDescription-BcBCPNdm.js";import"./useUpdateEffect-DMqv8wU_.js";import"./ListKeyboardDelegate-CiLABnWW.js";import"./useHasTabbableChild-HmJM8sRe.js";import"./Checkbox-CV8bYp64.js";import"./check-BH81vSb7.js";import"./useToggleState-Chju03YS.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
