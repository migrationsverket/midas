import{r as m,f as l,j as t}from"./iframe-I-T_H5J_.js";import{S as d}from"./SearchField-ChQFEAui.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DHcn_ZRX.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-JproU_nw.js";import"./clsx-B-dksMZM.js";import"./Form-DVDLEN1p.js";import"./useFocusRing-B9IqJ9Mt.js";import"./index-CYZt27Wv.js";import"./index-B8pVpPqH.js";import"./Input-DS38Pnqo.js";import"./Hidden-BMWDbIRC.js";import"./Button-C5239-Pe.js";import"./useLabel-QpkB0RGM.js";import"./useLabels-DPpJmx2A.js";import"./useButton-Bv3qVFH-.js";import"./FieldError-BblABd-b.js";import"./Text-BJ8cMGkE.js";import"./clsx-Ciqy0D92.js";import"./Text-DpvJioBU.js";import"./RSPContexts-CMvVC2hR.js";import"./Group-5DmSgEKB.js";import"./useControlledState-B5eahPl_.js";import"./useLocalizedStringFormatter-BsAjlIoO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B6Tguhnl.js";import"./useField-BWv-prfB.js";import"./TextField.module-DdivwlC8.js";import"./search-Dl6FS96W.js";import"./createLucideIcon-BVI9IRTp.js";import"./x-DtRGZRlW.js";import"./useLocalizedStringFormatter-B0a8KkB4.js";import"./Button-B83Ld0RX.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-ImRnGBY4.js";import"./Collection-CTpshU-_.js";import"./index-DZE7NYqg.js";import"./DragAndDrop-Wyb9y6JT.js";import"./getScrollParent-9iE4PQDL.js";import"./scrollIntoView-BTHLtI1M.js";import"./SelectionIndicator-6XoyzhMl.js";import"./SelectionManager-CrbLoHvI.js";import"./useEvent-DneLHAtr.js";import"./useDescription-BbwaY706.js";import"./inertValue-BQ-oro0j.js";import"./useHighlightSelectionDescription-k0BsYfNK.js";import"./useUpdateEffect-urv6qtix.js";import"./ListKeyboardDelegate-BHf0MnFT.js";import"./useHasTabbableChild-Dt7_iTi_.js";import"./Checkbox-BQ924rah.js";import"./check-BPYBK1Yk.js";import"./useToggleState-ChBvgvkO.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
