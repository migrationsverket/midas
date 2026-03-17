import{r as m,f as l,j as t}from"./iframe-DJvMsPK5.js";import{S as d}from"./SearchField-Dv3pTISB.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BnSvMTmA.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C3uqw8vh.js";import"./utils-esTkTgMr.js";import"./useLocalizedStringFormatter-yOW7xoG5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dp4GhZTt.js";import"./useFocusRing-D6tEw859.js";import"./index-Ipi0mz-M.js";import"./index-B3xZpXqe.js";import"./useFormValidation-C29k_zHA.js";import"./useField-Dg6SxeU5.js";import"./Button-DaEctwPE.js";import"./Hidden-C5_NTDOk.js";import"./useLabels-C9xCPnuW.js";import"./useButton-D9q_HuIm.js";import"./search-DFjnPend.js";import"./createLucideIcon-Cs-gIZHj.js";import"./ClearButton-Ddy5zb8W.js";import"./x-DBtm1AH7.js";import"./Button-BLuDdZMx.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C4ywwRp4.js";import"./VisuallyHidden-DGcwd28E.js";import"./FieldError-CQm3X7MS.js";import"./Text-DIS3P1po.js";import"./Text-CLEP5l2l.js";import"./RSPContexts-Cx8DPVhb.js";import"./Collection-C7443sXL.js";import"./index-B9Ss_QBk.js";import"./DragAndDrop-GSZoJ6TE.js";import"./getScrollParent-CijgiSwc.js";import"./scrollIntoView-DGipwkZA.js";import"./SelectionIndicator-Ng8BHK2r.js";import"./SelectionManager-CR42a_fl.js";import"./useEvent-DACQ8JSc.js";import"./useDescription-D8zJCmPO.js";import"./inertValue-CgXBHyd8.js";import"./useHighlightSelectionDescription-DyUhruRZ.js";import"./useUpdateEffect-B4LoADPT.js";import"./ListKeyboardDelegate-3IneNIxm.js";import"./useHasTabbableChild-BIva39gm.js";import"./Checkbox-C-rbPrjR.js";import"./Form-DGMHN9mU.js";import"./check-CrnZq4Xj.js";import"./useToggleState-CUSYtc9i.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
